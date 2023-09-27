import "./index.css";
import { model } from "./js/model";
import { abbreviationDictionary } from "./js/abbreviationDictionary";
import mxGraphFactory from "mxgraph";

const {
    mxClient,
    mxGraph,
    mxRubberband,
    mxKeyHandler,
    mxUtils,
    mxConstants,
    mxCompactTreeLayout,
    mxPerimeter,
    mxConnectionConstraint,
    mxShape,
    mxPoint,
    mxConstraintHandler,
    mxConnectionHandler,
    mxImage,
    mxEdgeHandler,
    mxEdgeStyle,
    mxEvent,
} = new mxGraphFactory();

export default function main(el) {
    if (!mxClient.isBrowserSupported()) {
        //Проверка поддержки браузера
        mxUtils.error("Browser is not supported!", 200, false);
    } else {
        mxClient.NO_FO = mxClient.NO_FO || mxClient.IS_SF || mxClient.IS_GC;
        mxGraph.htmlLabels = true;

        let graph = new mxGraph(el);
        graph.htmlLabels = true;
        graph.vertexLabelsMovable = false;
        new mxRubberband(graph);
        new mxKeyHandler(graph);

        graph.setConnectable(true);
        graph.setPortsEnabled(false);

        graph.graphHandler.removeCellsFromParent = false;

        graph.getLabel = function (cell) {
            let label = this.labelsVisible ? this.convertValueToString(cell) : "";
            let geometry = this.model.getGeometry(cell);

            if (
                !this.model.isCollapsed(cell) &&
                geometry != null &&
                (geometry.offset == null ||
                    (geometry.offset.x === 0 && geometry.offset.y === 0)) &&
                this.model.isVertex(cell) &&
                geometry.width >= 2
            ) {
                let style = this.getCellStyle(cell);
                let fontSize =
                    style[mxConstants.STYLE_FONTSIZE] || mxConstants.DEFAULT_FONTSIZE;
                let max = geometry.width / (fontSize * 0.825);

                if (max < label.length) {
                    return label.substring(0, max) + "...";
                }
            }
            return label;
        };

        graph.isWrapping = function (cell) {
            return this.model.isCollapsed(cell);
        };

        graph.isLabelClipped = function (cell) {
            let geometry = this.model.getGeometry(cell);

            return (
                geometry != null &&
                !geometry.relative &&
                (geometry.offset == null ||
                    (geometry.offset.x === 0 && geometry.offset.y === 0))
            );
        };

        let parent = graph.getDefaultParent();

        graph.getModel().beginUpdate();

        // Для соединения клеток графа. Длинный кусок кода
        mxConstraintHandler.prototype.intersects = function (
            icon,
            point,
            source,
            existingEdge
        ) {
            return !source || existingEdge || mxUtils.intersects(icon.bounds, point);
        };
        const mxConnectionHandlerUpdateEdgeState =
            mxConnectionHandler.prototype.updateEdgeState;
        mxConnectionHandler.prototype.updateEdgeState = function (pt, constraint) {
            if (pt != null && this.previous != null) {
                const constraints = this.graph.getAllConnectionConstraints(
                    this.previous
                );
                let nearestConstraint = null;
                let dist = null;

                for (let i = 0; i < constraints.length; i++) {
                    const cp = this.graph.getConnectionPoint(
                        this.previous,
                        constraints[i]
                    );

                    if (cp != null) {
                        let tmp =
                            (cp.x - pt.x) * (cp.x - pt.x) + (cp.y - pt.y) * (cp.y - pt.y);

                        if (dist == null || tmp < dist) {
                            nearestConstraint = constraints[i];
                            dist = tmp;
                        }
                    }
                }

                if (nearestConstraint != null) {
                    this.sourceConstraint = nearestConstraint;
                }
            }
            mxConnectionHandlerUpdateEdgeState.apply(this, arguments);
        };

        if (graph.connectionHandler.connectImage == null) {
            graph.connectionHandler.isConnectableCell = function (cell) {
                return false;
            };
            mxEdgeHandler.prototype.isConnectableCell = function (cell) {
                return graph.connectionHandler.isConnectableCell(cell);
            };
        }

        graph.connectionHandler.createEdgeState = function (me) {
            const edge = graph.createEdge(
                null,
                null,
                null,
                null,
                null,
                "edgeStyle=orthogonalEdgeStyle"
            );

            return new mxCellState(
                this.graph.view,
                edge,
                this.graph.getCellStyle(edge)
            );
        };

        mxConstraintHandler.prototype.pointImage = new mxImage(
            "images/dot.gif",
            8,
            8
        );

        mxEdgeHandler.prototype.isConnectableCell = function (cell) {
            return graph.connectionHandler.isConnectableCell(cell);
        };

        graph.view.getTerminalPort = function (state, terminal, source) {
            return terminal;
        };

        // Эта функция показывает доступные порты при наведении мышки
        graph.getAllConnectionConstraints = function (terminal, source) {
            if (terminal != null && this.model.isVertex(terminal.cell)) {
                let style = terminal.cell.style;
                if (
                    style.includes("MATERIALSTREAM") ||
                    style.includes("ENERGYSTREAM") ||
                    style.includes("ORIFICEPLATE") ||
                    style.includes("TANK") ||
                    style.includes("ENERGYRECYCLEBLOCK") ||
                    style.includes("CONTROLLERBLOCK") ||
                    style.includes("SPECIFICATIONBLOCK") ||
                    style.includes("VALVE")
                ) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                    ];
                } else if (
                    style.includes("COMPRESSOR") ||
                    style.includes("PLUGFLOWREACTORPRF")
                ) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0, 0.3), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.7), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                    ];
                } else if (
                    style.includes("PUMP") ||
                    style.includes("PIPESEGMENT") ||
                    style.includes("AIRCOOLER") ||
                    style.includes("GIBBSREACTORREAKTORO") ||
                    style.includes("SOLIDSSEPARATOR") ||
                    style.includes("HYDROELECTRICTURBINE") ||
                    style.includes("PEMFUELCELLAMPHLETT") ||
                    style.includes("WATERELECTROLYZER")
                ) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(0.5, 1), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                    ];
                } else if (style.includes("EXPANDERTURBINE")) {
                    return [
                        new mxConnectionConstraint(new mxPoint(1, 0.3), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.7), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                    ];
                } else if (
                    style.includes("SOLARPANEL") ||
                    style.includes("WINDTURBINE")
                ) {
                    return [new mxConnectionConstraint(new mxPoint(0.5, 1), true)];
                } else if (
                    style.includes("COMPOUNDSEPARATOR") ||
                    style.includes("STREAMSPLITTER") ||
                    style.includes("CONVERSIONREACTOR") ||
                    style.includes("FILTER")
                ) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.3), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.7), true),
                    ];
                } else if (
                    style.includes("HEATER") ||
                    style.includes("HEATEXCHANGER") ||
                    style.includes("CONTINUOUSSTIRREDTANKREACTORCSTR") ||
                    style.includes("EQUILIBRIUMREACTOR") ||
                    style.includes("GIBBSREACTOR") ||
                    style.includes("COOLER")
                ) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0.5, 0), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(0.5, 1), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                    ];
                } else if (
                    style.includes("GASLIQUIDSEPARATOR") ||
                    style.includes("FLOWSHEET") ||
                    style.includes("PYTHONSCRIPT") ||
                    style.includes("NEURALNETWORKUNITOPERATION")
                ) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0, 0.1), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.3), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.7), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.9), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.1), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.3), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.7), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.9), true),
                    ];
                } else if (
                    style.includes("STREAMMIXER") ||
                    style.includes("ENERGYMIXER")
                ) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0, 0.125), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.25), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.325), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.45), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.575), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.6), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.725), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.85), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.975), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                    ];
                } else if (style.includes("SPREADSHEET")) {
                    return [
                        new mxConnectionConstraint(new mxPoint(0, 0.1), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.3), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.7), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.9), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.2), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.4), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.6), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.8), true),
                    ];
                } else {
                    return [
                        new mxConnectionConstraint(new mxPoint(0.5, 0), true),
                        new mxConnectionConstraint(new mxPoint(0, 0.5), true),
                        new mxConnectionConstraint(new mxPoint(0.5, 1), true),
                        new mxConnectionConstraint(new mxPoint(1, 0.5), true),
                    ];
                }
            }

            return null;
        };

        graph.connectionHandler.isConnectableCell = function (cell) {
            return false;
        };

        //Задание ребер графа по-умолчанию
        const styleEdge = graph.getStylesheet().getDefaultEdgeStyle();
        styleEdge[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;
        styleEdge[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC; //mxConstants.NONE; Если убираем стрелки соединений
        styleEdge[mxConstants.STYLE_STROKEWIDTH] = 1;
        styleEdge[mxConstants.STYLE_STROKECOLOR] = "black";
        styleEdge[mxConstants.STYLE_CURVED] = 0;
        styleEdge[mxConstants.STYLE_ROUNDED] = 0;
        styleEdge[mxConstants.STYLE_SEGMENT] = 100;
        styleEdge[mxConstants.STYLE_ENTRY_PERIMETER] = 1;
        styleEdge[mxConstants.STYLE_EXIT_PERIMETER] = 1;
        styleEdge[mxConstants.STYLE_EXIT_X] = 1;
        styleEdge[mxConstants.STYLE_EXIT_Y] = 0.5;
        styleEdge[mxConstants.STYLE_ENTRY_X] = 0;
        styleEdge[mxConstants.STYLE_ENTRY_Y] = 0.5;

        //Удаление по Del
        const keyHandler = new mxKeyHandler(graph);
        keyHandler.bindKey(46, function (evt) {
            if (graph.isEnabled()) graph.removeCells();
        });

        // Создание элементов графа под нужные фигуры
        let style = new Object();
        for (let i = 0; i < abbreviationDictionary.length; i++) {
            if (i === 0) {
                style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
                style[mxConstants.STYLE_FILLCOLOR] = "#FFFFFF";
                style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
                style[mxConstants.STYLE_RESIZABLE] = 0;
                style[mxConstants.STYLE_FOLDABLE] = false;
                style[mxConstants.STYLE_ORTHOGONAL] = false;
                style[mxConstants.STYLE_ENTRY_PERIMETER] = false;
                style[mxConstants.STYLE_SHADOW] = false;
                style[mxConstants.STYLE_ROUNDED] = false;
                style[mxConstants.STYLE_ENTRY_PERIMETER] = 1;
                style[mxConstants.STYLE_EXIT_PERIMETER] = 1;
            } else {
                style = mxUtils.clone(style);
            }
            style[mxConstants.STYLE_IMAGE] =
                "images/" + abbreviationDictionary[i][0].replace(/\W*/gi, "") + ".png";
            graph
                .getStylesheet()
                .putCellStyle(
                    "'" +
                    abbreviationDictionary[i][0].toUpperCase().replace(/\W*/gi, "") +
                    "'",
                    style
                );
        }

        const vertex = []; //Список вершин, специально вынесла наружу
        //Сопоставление типа элемента и фигуры
        function switchType(productName) {
            return "'" + productName.toUpperCase().replace(/\W*/gi, "") + "'";
        }

        // Подпись вершин графа
        function vertexSignature(productName) {
            let check = 0;
            for (let j = 0; j < vertex.length - 1; j++) {
                if (
                    vertex[j].id.split("/")[1].toUpperCase().replace(/\W*/gi, "") ===
                    productName.toUpperCase().replace(/\W*/gi, "")
                ) {
                    check++;
                }
            }
            for (let k = 0; k < abbreviationDictionary.length; k++) {
                if (
                    abbreviationDictionary[k][0].toUpperCase().replace(/\W*/gi, "") ===
                    productName.toUpperCase().replace(/\W*/gi, "")
                ) {
                    graph.insertVertex(
                        vertex[vertex.length - 1],
                        null,
                        abbreviationDictionary[k][1] + " - " + (check + 1),
                        0.5,
                        1.3,
                        0,
                        0,
                        null,
                        true
                    );
                }
            }
        }

        //Создаем ребра графа
        function edgeCreate(model, vertexArray) {
            let connections =
                model.DWSIM_Simulation_Data.GraphicObjects.GraphicObject;
            let edgeArray = [];
            for (let key in connections) {
                for (let connector in connections[key].OutputConnectors) {
                    connections[key].OutputConnectors[
                        connector
                    ].Connector.attributes.forEach((el) => {
                        if (el.name === "AttachedToObjID") {
                            edgeArray.push([connections[key].Name, el.value]);
                        }
                    });
                }
                for (let connector in connections[key].EnergyConnector) {
                    connections[key].EnergyConnector[
                        connector
                    ].Connector.attributes.forEach((el) => {
                        if (el.name === "AttachedToObjID") {
                            edgeArray.push([connections[key].Name, el.value]);
                        }
                    });
                }
            }

            edgeArray.forEach((el) => {
                for (let j = 0; j < vertexArray.length; j++) {
                    if (el[0] === vertexArray[j].id.split("/")[0]) {
                        for (let k = 0; k < vertexArray.length; k++) {
                            if (el[1] === vertexArray[k].id.split("/")[0]) {
                                if (
                                    vertexArray[k].id.split("/")[1] === "Solar Panel" ||
                                    vertexArray[k].id.split("/")[1] === "Wind Turbine"
                                ) {
                                    graph.insertEdge(
                                        parent,
                                        null,
                                        null,
                                        vertexArray[j],
                                        vertexArray[k],
                                        "exitX=0.5;exitY=1;exitPerimeter=1;entryX=0;entryY=0.5;entryPerimeter=1;"
                                    );
                                } else
                                    graph.insertEdge(
                                        parent,
                                        null,
                                        null,
                                        vertexArray[j],
                                        vertexArray[k]
                                    );
                            }
                        }
                    }
                }
            });

            let controller =
                model.DWSIM_Simulation_Data.SimulationObjects.SimulationObject;
            let controllerArray = [];
            for (let key in controller) {
                if (controller[key].ProductName === "Controller Block") {
                    for (let atr in controller[key].ManipulatedObjectData) {
                        controller[key].ManipulatedObjectData[atr].forEach((el) => {
                            if (el.name === "ID")
                                controllerArray.push([controller[key].Name, el.value]);
                        });
                    }
                    for (let atr in controller[key].ControlledObjectData) {
                        controller[key].ControlledObjectData[atr].forEach((el) => {
                            if (el.name === "ID")
                                controllerArray.push([controller[key].Name, el.value]);
                        });
                    }
                }
            }
            controllerArray.forEach((el) => {
                for (let j = 0; j < vertexArray.length; j++) {
                    if (el[0] === vertexArray[j].id.split("/")[0]) {
                        for (let k = 0; k < vertexArray.length; k++) {
                            if (el[1] === vertexArray[k].id.split("/")[0]) {
                                graph.insertEdge(
                                    parent,
                                    null,
                                    null,
                                    vertexArray[j],
                                    vertexArray[k],
                                    "strokeColor=red;dashed=1"
                                );
                            }
                        }
                    }
                }
            });
        }

        //Задаем размеры иконок на графе
        function figureSizeWidth(name) {
            let replacedName = name.toUpperCase().replace(/\W*/gi, "");
            switch (replacedName) {
                case "ABSORPTIONEXTRACTIONCOLUMN":
                    return 27 * 3.5;
                case "AIRCOOLER":
                    return 52;
                case "ANALOGGAUGE":
                    return 45 * 1.5;
                case "CAPEOPENUNITOPERATION":
                    return 32 * 1.5;
                case "CHEMSEPCOLUMN":
                    return 55 * 3.5;
                case "COMPOUNDSEPARATOR":
                    return 32 * 1.5;
                case "COMPRESSOR":
                    return 45;
                case "CONTINUOUSSTIRREDTANKREACTORCSTR":
                    return 33 * 1.5;
                case "CONTROLLERBLOCK":
                    return 49 * 0.7;
                case "CONVERSIONREACTOR":
                    return 32 * 1.5;
                case "COOLER":
                    return 52;
                case "DIGITALGAUGE":
                    return 49 * 1.5;
                case "DISTILLATIONCOLUMN":
                    return 55 * 3.5;
                case "DUMMYUNITOPERATION":
                    return 40;
                case "ENERGYMIXER":
                    return 58 * 1.5;
                case "ENERGYRECYCLEBLOCK":
                    return 49 * 0.7;
                case "ENERGYSTREAM":
                    return 57 * 0.5;
                case "EQUILIBRIUMREACTOR":
                    return 32 * 1.5;
                case "EXPANDERTURBINE":
                    return 45;
                case "FILTER":
                    return 32 * 1.5;
                case "FLOWSHEET":
                    return 32;
                case "GASLIQUIDSEPARATOR":
                    return 27 * 1.5;
                case "GIBBSREACTOR":
                    return 32 * 1.5;
                case "GIBBSREACTORREAKTORO":
                    return 57 * 1.5;
                case "HEATER":
                    return 51;
                case "HEATEXCHANGER":
                    return 61 * 1.5;
                case "HYDROELECTRICTURBINE":
                    return 54 * 1.5;
                case "INPUTBOX":
                    return 49;
                case "LEVELGAUGE":
                    return 313 * 1.5;
                case "MATERIALSTREAM":
                    return 57 * 0.5;
                case "ORIFICEPLATE":
                    return 51;
                case "PEMFUELCELLAMPHLETT":
                    return 49 * 1.5;
                case "PIDCONTROLLER":
                    return 52 * 1.5;
                case "PIPESEGMENT":
                    return 73 * 1.5;
                case "PLUGFLOWREACTORPRF":
                    return 61 * 1.5;
                case "PUMP":
                    return 49;
                case "PYTHONSCRIPT":
                    return 32;
                case "RECYCLEBLOCK":
                    return 49 * 0.7;
                case "SHORTCUTCOLUMN":
                    return 55 * 3.5;
                case "SOLARPANEL":
                    return 50;
                case "SOLIDSSEPARATOR":
                    return 32 * 1.5;
                case "SPECIFICATIONBLOCK":
                    return 49 * 0.7;
                case "SPREADSHEET":
                    return 32;
                case "STREAMMIXER":
                    return 44;
                case "STREAMSPLITTER":
                    return 44;
                case "SWITCH":
                    return 67;
                case "TANK":
                    return 33 * 1.5;
                case "VALVE":
                    return 76;
                case "WATERELECTROLYZER":
                    return 51 * 1.5;
                case "WINDTURBINE":
                    return 39;
                default:
                    return 50;
            }
        }

        function figureSizeHeight(name) {
            let replacedName = name.toUpperCase().replace(/\W*/gi, "");
            switch (replacedName) {
                case "ABSORPTIONEXTRACTIONCOLUMN":
                    return 51 * 3.5;
                case "AIRCOOLER":
                    return 52;
                case "ANALOGGAUGE":
                    return 45 * 1.5;
                case "CAPEOPENUNITOPERATION":
                    return 51 * 1.5;
                case "CHEMSEPCOLUMN":
                    return 68 * 3.5;
                case "COMPOUNDSEPARATOR":
                    return 51 * 1.5;
                case "COMPRESSOR":
                    return 51;
                case "CONTINUOUSSTIRREDTANKREACTORCSTR":
                    return 46 * 1.5;
                case "CONTROLLERBLOCK":
                    return 49 * 0.7;
                case "CONVERSIONREACTOR":
                    return 54 * 1.5;
                case "COOLER":
                    return 52;
                case "DIGITALGAUGE":
                    return 49 * 1.5;
                case "DISTILLATIONCOLUMN":
                    return 68 * 3.5;
                case "DUMMYUNITOPERATION":
                    return 46;
                case "ENERGYMIXER":
                    return 51 * 1.5;
                case "ENERGYRECYCLEBLOCK":
                    return 49 * 0.7;
                case "ENERGYSTREAM":
                    return 30 * 0.5;
                case "EQUILIBRIUMREACTOR":
                    return 54 * 1.5;
                case "EXPANDERTURBINE":
                    return 51;
                case "FILTER":
                    return 51 * 1.5;
                case "FLOWSHEET":
                    return 31;
                case "GASLIQUIDSEPARATOR":
                    return 51 * 1.5;
                case "GIBBSREACTOR":
                    return 51 * 1.5;
                case "GIBBSREACTORREAKTORO":
                    return 57 * 1.5;
                case "HEATER":
                    return 51;
                case "HEATEXCHANGER":
                    return 50 * 1.5;
                case "HYDROELECTRICTURBINE":
                    return 54 * 1.5;
                case "INPUTBOX":
                    return 46;
                case "LEVELGAUGE":
                    return 464 * 1.5;
                case "MATERIALSTREAM":
                    return 30 * 0.5;
                case "ORIFICEPLATE":
                    return 51;
                case "PEMFUELCELLAMPHLETT":
                    return 50 * 1.5;
                case "PIDCONTROLLER":
                    return 45 * 1.5;
                case "PIPESEGMENT":
                    return 50 * 1.5;
                case "PLUGFLOWREACTORPRF":
                    return 50 * 1.5;
                case "PUMP":
                    return 49;
                case "PYTHONSCRIPT":
                    return 31;
                case "RECYCLEBLOCK":
                    return 49 * 0.7;
                case "SHORTCUTCOLUMN":
                    return 68 * 3.5;
                case "SOLARPANEL":
                    return 50;
                case "SOLIDSSEPARATOR":
                    return 51 * 1.5;
                case "SPECIFICATIONBLOCK":
                    return 49 * 0.7;
                case "SPREADSHEET":
                    return 31;
                case "STREAMMIXER":
                    return 50;
                case "STREAMSPLITTER":
                    return 50;
                case "SWITCH":
                    return 35;
                case "TANK":
                    return 48 * 1.5;
                case "VALVE":
                    return 44;
                case "WATERELECTROLYZER":
                    return 50 * 1.5;
                case "WINDTURBINE":
                    return 49;
                default:
                    return 50;
            }
        }

        //Отрисовка графа
        function graphCreate(model) {
            for (let key in model.DWSIM_Simulation_Data.SimulationObjects
                .SimulationObject) {
                let productName =
                    model.DWSIM_Simulation_Data.SimulationObjects.SimulationObject[key]
                        .ProductName;
                let name =
                    model.DWSIM_Simulation_Data.SimulationObjects.SimulationObject[key]
                        .Name;

                vertex.push(
                    graph.insertVertex(
                        parent,
                        name + "/" + productName,
                        null,
                        20 + Math.floor(Math.random() * 200),
                        20 + Math.floor(Math.random() * 200),
                        figureSizeWidth(productName),
                        figureSizeHeight(productName),
                        switchType(productName)
                    )
                );

                vertexSignature(productName);
            }
            edgeCreate(model, vertex);

            //Упорядочивание в виде дерева
            let layout = new mxCompactTreeLayout(graph);
            //Перерисовка ветвей
            layout.execute(parent);
        }

        try {
            //Создание графа
            graphCreate(model);
        } finally {
            graph.getModel().endUpdate();
        }
    }
}
try {
    main(document.getElementById("graphContainer"));
} catch (er) {
    console.log("error in main ", er.message);
}
