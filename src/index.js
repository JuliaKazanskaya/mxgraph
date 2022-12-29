import './index.css';
import {model} from "./js/model";
import {abbreviationDictionary} from "./js/abbreviationDictionary";
import mxGraphFactory from "mxgraph";

const {
    mxClient,
    mxGraphModel,
    mxGraph,
    mxGraphHandler,
    mxRubberband,
    mxKeyHandler,
    mxUtils,
    mxConstants,
    mxRectangle,
    mxCompactTreeLayout,
    mxToolbar,
    mxGeometry,
    mxCell,
    mxPerimeter,
    mxGraphView,
    mxConnectionConstraint,
    mxShape,
    mxTriangle,
    mxPoint,
    mxConstraintHandler,
    mxImage,
    mxEdgeHandler,
    mxArrowConnector,
    mxEdgeStyle,
    mxVertexowConnector
} = new mxGraphFactory();

export default function main(el) {
    if (!mxClient.isBrowserSupported()) { //Проверка поддержки браузера
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

        let ports = new Array();

        graph.graphHandler.removeCellsFromParent = false;

        graph.autoSizeCellsOnAdd = true;

        graph.isCellLocked = function (cell) {
            return this.isCellsLocked();
        };
        graph.isCellResizable = function (cell) {
            let geo = this.model.getGeometry(cell);

            return geo == null;
            return this.isCellResizable();
        };


        graph.getLabel = function (cell) {
            let label = this.labelsVisible ? this.convertValueToString(cell) : "";
            let geometry = this.model.getGeometry(cell);

            if (!this.model.isCollapsed(cell) && geometry != null && (geometry.offset == null || (geometry.offset.x === 0 && geometry.offset.y === 0)) && this.model.isVertex(cell) && geometry.width >= 2) {
                let style = this.getCellStyle(cell);
                let fontSize = style[mxConstants.STYLE_FONTSIZE] || mxConstants.DEFAULT_FONTSIZE;
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

            return (geometry != null && !geometry.relative && (geometry.offset == null || (geometry.offset.x === 0 && geometry.offset.y === 0)));
        };

        let parent = graph.getDefaultParent();

        graph.getModel().beginUpdate();
        //graph.prototype.foldingEnabled = false;

        // Для соединения клеток графа. Длинный кусок кода
        mxConstraintHandler.prototype.pointImage = new mxImage('images/dot.gif', 10, 10);
        ports['w'] = {x: 0, y: 0.5, perimeter: true, constraint: 'west'};
        ports['e'] = {x: 1, y: 0.5, perimeter: true, constraint: 'east'};
        ports['n'] = {x: 0.5, y: 0, perimeter: true, constraint: 'north'};
        ports['s'] = {x: 0.5, y: 1, perimeter: true, constraint: 'south'};

        let ports2 = new Array();

        ports2['in1'] = {x: 0, y: 0, perimeter: true, constraint: 'west'};
        ports2['in2'] = {x: 0, y: 0.25, perimeter: true, constraint: 'west'};
        ports2['in3'] = {x: 0, y: 0.5, perimeter: true, constraint: 'west'};
        ports2['in4'] = {x: 0, y: 0.75, perimeter: true, constraint: 'west'};
        ports2['in5'] = {x: 0, y: 1, perimeter: true, constraint: 'west'};

        ports2['out1'] = {x: 0.5, y: 0, perimeter: true, constraint: 'north east'};
        ports2['out2'] = {x: 1, y: 0.5, perimeter: true, constraint: 'east'};
        ports2['out3'] = {x: 0.5, y: 1, perimeter: true, constraint: 'south east'};

        mxShape.prototype.getPorts = function () {
            return ports;
        };

        mxTriangle.prototype.getPorts = function () {
            return ports2;
        };

        graph.connectionHandler.isConnectableCell = function (cell) {
            return false;
        };
        mxEdgeHandler.prototype.isConnectableCell = function (cell) {
            return graph.connectionHandler.isConnectableCell(cell);
        };

        graph.view.getTerminalPort = function (state, terminal, source) {
            return terminal;
        };

        graph.getAllConnectionConstraints = function (terminal, source) {
            if (terminal != null && terminal.shape != null && terminal.shape.stencil != null) {
                if (terminal.shape.stencil != null) {
                    return terminal.shape.stencil.constraints;
                }
            } else if (terminal != null && this.model.isVertex(terminal.cell)) {
                if (terminal.shape != null) {
                    let ports = terminal.shape.getPorts();
                    let cstrs = new Array();

                    for (let id in ports) {
                        let port = ports[id];

                        let cstr = new mxConnectionConstraint(new mxPoint(port.x, port.y), port.perimeter);
                        cstr.id = id;
                        cstrs.push(cstr);
                    }
                    return cstrs;
                }
            }
            return null;
        };

        graph.setConnectionConstraint = function (edge, terminal, source, constraint) {
            if (constraint != null) {
                let key = (source) ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT;

                if (constraint == null || constraint.id == null) {
                    this.setCellStyles(key, null, [edge]);
                } else if (constraint.id != null) {
                    this.setCellStyles(key, constraint.id, [edge]);
                }
            }
        };
        graph.getConnectionConstraint = function (edge, terminal, source) {
            let key = (source) ? mxConstants.STYLE_SOURCE_PORT : mxConstants.STYLE_TARGET_PORT;
            let id = edge.style[key];

            if (id != null) {
                let c = new mxConnectionConstraint(null, null);
                c.id = id;
                return c;
            }
            return null;
        };

        const graphGetConnectionPoint = graph.getConnectionPoint;
        graph.getConnectionPoint = function (vertex, constraint) {
            if (constraint.id != null && vertex != null && vertex.shape != null) {
                let port = vertex.shape.getPorts()[constraint.id];

                if (port != null) {
                    constraint = new mxConnectionConstraint(new mxPoint(port.x, port.y), port.perimeter);
                }
            }

            return graphGetConnectionPoint.apply(this, arguments);
        };
        //Задание ребер графа
        const styleEdge = graph.getStylesheet().getDefaultEdgeStyle();
        styleEdge[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom;
        styleEdge[mxConstants.STYLE_ENDARROW] = mxConstants.ARROW_CLASSIC; //mxConstants.NONE; Если убираем стрелки соединений
        styleEdge[mxConstants.STYLE_STROKEWIDTH] = 1;
        styleEdge[mxConstants.STYLE_STROKECOLOR] = 'black';
        styleEdge[mxConstants.STYLE_CURVED] = '0';
        styleEdge[mxConstants.STYLE_ROUNDED] = '0';
        styleEdge[mxConstants.STYLE_SEGMENT] = '5';

        // Создание элементов графа под нужные фигуры
        let style = new Object();
        for (let i = 0; i < abbreviationDictionary.length; i++) {
            if (i == 0) {
                style[mxConstants.STYLE_SHAPE] = mxConstants.SHAPE_IMAGE;
                style[mxConstants.STYLE_FILLCOLOR] = '#FFFFFF';
                style[mxConstants.STYLE_PERIMETER] = mxPerimeter.RectanglePerimeter;
                style[mxConstants.STYLE_RESIZABLE] = 0;
                style[mxConstants.STYLE_FOLDABLE] = false;
                style[mxConstants.STYLE_ORTHOGONAL] = false;
                style[mxConstants.STYLE_ENTRY_PERIMETER] = false;
            } else {
                style = mxUtils.clone(style);
            }
            style[mxConstants.STYLE_IMAGE] = 'images/' + abbreviationDictionary[i][0].replace(/\W*/gi, '') + '.png';
            graph.getStylesheet().putCellStyle('\'' + abbreviationDictionary[i][0].toUpperCase().replace(/\W*/gi, '') + '\'', style);
        }

        let vertex = []; //Список вершин, специально вынесла наружу
        //Сопоставление типа элемента и фигуры
        function switchType(productName) {
            return '\'' + productName.toUpperCase().replace(/\W*/gi, '') + '\''; // Выгрузить точный справочник всех фигур по наименованиям
        }

        // Подпись вершин графа
        function vertexSignature(productName) {
            let check = 0;
            for (let j = 0; j < vertex.length - 1; j++) {
                if (vertex[j].id.split('/')[1].toUpperCase().replace(/\W*/gi, '') === productName.toUpperCase().replace(/\W*/gi, '')) {
                    check++;
                }
            }
            for (let k = 0; k < abbreviationDictionary.length; k++) {
                if (abbreviationDictionary[k][0].toUpperCase().replace(/\W*/gi, '') === productName.toUpperCase().replace(/\W*/gi, '')) {
                    graph.insertVertex(vertex[vertex.length - 1], null, abbreviationDictionary[k][1] + ' - ' + (check + 1), 0.5, 1.3, 0, 0, null, true);
                }
            }
        }

        //Создаем ребра графа
        function edgeCreate(model, vertexArray) {
            let connections = model.DWSIM_Simulation_Data.GraphicObjects.GraphicObject;
            let edgeArray = [];
            for (let key in connections) {
                for (let connector in connections[key].OutputConnectors) {
                    connections[key].OutputConnectors[connector].Connector.attributes.forEach(el => {
                        if (el.name == 'AttachedToObjID') {
                            edgeArray.push([connections[key].Name, el.value]);
                        }
                    });
                }
                for (let connector in connections[key].EnergyConnector) {
                    connections[key].EnergyConnector[connector].Connector.attributes.forEach(el => {
                        if (el.name == 'AttachedToObjID') {
                            edgeArray.push([connections[key].Name, el.value]);
                        }
                    });
                }
            }
            edgeArray.forEach(el => {
                for (let j = 0; j < vertexArray.length; j++) {
                    if (el[0] == vertexArray[j].id.split('/')[0]) {
                        for (let k = 0; k < vertexArray.length; k++) {
                            if (el[1] == vertexArray[k].id.split('/')[0]) {
                                graph.insertEdge(parent, null, null, vertexArray[j], vertexArray[k]);
                            }
                        }
                    }
                }
            });

            let controller = model.DWSIM_Simulation_Data.SimulationObjects.SimulationObject;
            let controllerArray = [];
            for (let key in controller) {
                if (controller[key].ProductName == 'Controller Block') {
                    for (let atr in controller[key].ManipulatedObjectData) {
                        controller[key].ManipulatedObjectData[atr].forEach(el => {
                                if (el.name == 'ID')
                                    controllerArray.push([controller[key].Name, el.value]);
                            }
                        );
                    }
                    for (let atr in controller[key].ControlledObjectData) {
                        controller[key].ControlledObjectData[atr].forEach(el => {
                                if (el.name == 'ID')
                                    controllerArray.push([controller[key].Name, el.value]);
                            }
                        );
                    }
                }
            }
            controllerArray.forEach(el => {
                for (let j = 0; j < vertexArray.length; j++) {
                    if (el[0] == vertexArray[j].id.split('/')[0]) {
                        for (let k = 0; k < vertexArray.length; k++) {
                            if (el[1] == vertexArray[k].id.split('/')[0]) {
                                graph.insertEdge(parent, null, null, vertexArray[j], vertexArray[k], 'strokeColor=red;dashed=1');
                            }
                        }
                    }
                }
            });
        }

        //Задаем размеры иконок на графе
        function figureSizeWidth(name) {
            let replacedName = name.toUpperCase().replace(/\W*/gi, '');
            switch (replacedName) {
                case ('ABSORPTIONEXTRACTIONCOLUMN'):
                    return 27;
                    break;
                case ('AIRCOOLER'):
                    return 52;
                    break;
                case ('ANALOGGAUGE'):
                    return 45;
                    break;
                case ('CAPEOPENUNIT OPERATION'):
                    return 32;
                    break;
                case ('CHEMSEPCOLUMN'):
                    return 55;
                    break;
                case ('COMPOUNDSEPARATOR'):
                    return 32;
                    break;
                case ('COMPRESSOR'):
                    return 45;
                    break;
                case ('CONTINUOUSSTIRREDTANKREACTORCSTR'):
                    return 33;
                    break;
                case ('CONTROLLERBLOCK'):
                    return 49;
                    break;
                case ('CONVERSIONREACTOR'):
                    return 32;
                    break;
                case ('COOLER'):
                    return 52;
                    break;
                case ('DIGITALGAUGE'):
                    return 49;
                    break;
                case ('DISTILLATIONCOLUMN'):
                    return 55;
                    break;
                case ('DUMMYUNITOPERATION'):
                    return 40;
                    break;
                case ('ENERGYMIXER'):
                    return 58;
                    break;
                case ('ENERGYRECYCLEBLOCK'):
                    return 49;
                    break;
                case ('ENERGYSTREAM'):
                    return 57;
                    break;
                case ('EQUILIBRIUMREACTOR'):
                    return 32;
                    break;
                case ('EXPANDERTURBINE'):
                    return 45;
                    break;
                case ('FILTER'):
                    return 32;
                    break;
                case ('FLOWSHEET'):
                    return 32;
                    break;
                case ('GASLIQUIDSEPARATOR'):
                    return 27;
                    break;
                case ('GIBBSREACTOR'):
                    return 32;
                    break;
                case ('GIBBSREACTORREAKTORO'):
                    return 57;
                    break;
                case ('HEATER'):
                    return 51;
                    break;
                case ('HEATEXCHANGER'):
                    return 61;
                    break;
                case ('HYDROELECTRICTURBINE'):
                    return 54;
                    break;
                case ('INPUTBOX'):
                    return 49;
                    break;
                case ('MATERIALSTREAM'):
                    return 57;
                    break;
                case ('ORIFICEPLATE'):
                    return 51;
                    break;
                case ('PEMFUELCELLAMPHLETT'):
                    return 49;
                    break;
                case ('PIDCONTROLLER'):
                    return 52;
                    break;
                case ('PIPESEGMENT'):
                    return 73;
                    break;
                case ('PLUGFLOWREACTOR PRF'):
                    return 61;
                    break;
                case ('PUMP'):
                    return 49;
                    break;
                case ('PYTHONSCRIPT'):
                    return 32;
                    break;
                case ('RECYCLEBLOCK'):
                    return 49;
                    break;
                case ('SHORTCUTCOLUMN'):
                    return 55;
                    break;
                case ('SOLARPANEL'):
                    return 50;
                    break;
                case ('SOLIDSSEPARATOR'):
                    return 32;
                    break;
                case ('SPECIFICATIONBLOCK'):
                    return 49;
                    break;
                case ('SPREADSHEET'):
                    return 32;
                    break;
                case ('STREAMMIXER'):
                    return 44;
                    break;
                case ('STREAMSPLITTER'):
                    return 44;
                    break;
                case ('SWITCH'):
                    return 67;
                    break;
                case ('TANK'):
                    return 33;
                    break;
                case ('VALVE'):
                    return 76;
                    break;
                case ('WATERELECTROLYZER'):
                    return 51;
                    break;
                case ('WINDTURBINE'):
                    return 39;
                    break;
            }
        }
        function figureSizeHeight(name) {
            let replacedName = name.toUpperCase().replace(/\W*/gi, '');
            switch (replacedName) {
                case ('ABSORPTIONEXTRACTIONCOLUMN'):
                    return 51;
                    break;
                case ('AIRCOOLER'):
                    return 52;
                    break;
                case ('ANALOGGAUGE'):
                    return 45;
                    break;
                case ('CAPEOPENUNIT OPERATION'):
                    return 51;
                    break;
                case ('CHEMSEPCOLUMN'):
                    return 68;
                    break;
                case ('COMPOUNDSEPARATOR'):
                    return 51;
                    break;
                case ('COMPRESSOR'):
                    return 51;
                    break;
                case ('CONTINUOUSSTIRREDTANKREACTORCSTR'):
                    return 46;
                    break;
                case ('CONTROLLERBLOCK'):
                    return 49;
                    break;
                case ('CONVERSIONREACTOR'):
                    return 54;
                    break;
                case ('COOLER'):
                    return 52;
                    break;
                case ('DIGITALGAUGE'):
                    return 49;
                    break;
                case ('DISTILLATIONCOLUMN'):
                    return 68;
                    break;
                case ('DUMMYUNITOPERATION'):
                    return 46;
                    break;
                case ('ENERGYMIXER'):
                    return 51;
                    break;
                case ('ENERGYRECYCLEBLOCK'):
                    return 49;
                    break;
                case ('ENERGYSTREAM'):
                    return 30;
                    break;
                case ('EQUILIBRIUMREACTOR'):
                    return 54;
                    break;
                case ('EXPANDERTURBINE'):
                    return 51;
                    break;
                case ('FILTER'):
                    return 51;
                    break;
                case ('FLOWSHEET'):
                    return 31;
                    break;
                case ('GASLIQUIDSEPARATOR'):
                    return 51;
                    break;
                case ('GIBBSREACTOR'):
                    return 51;
                    break;
                case ('GIBBSREACTORREAKTORO'):
                    return 57;
                    break;
                case ('HEATER'):
                    return 51;
                    break;
                case ('HEATEXCHANGER'):
                    return 50;
                    break;
                case ('HYDROELECTRICTURBINE'):
                    return 54;
                    break;
                case ('INPUTBOX'):
                    return 46;
                    break;
                case ('MATERIALSTREAM'):
                    return 30;
                    break;
                case ('ORIFICEPLATE'):
                    return 51;
                    break;
                case ('PEMFUELCELLAMPHLETT'):
                    return 50;
                    break;
                case ('PIDCONTROLLER'):
                    return 45;
                    break;
                case ('PIPESEGMENT'):
                    return 50;
                    break;
                case ('PLUGFLOWREACTOR PRF'):
                    return 50;
                    break;
                case ('PUMP'):
                    return 49;
                    break;
                case ('PYTHONSCRIPT'):
                    return 31;
                    break;
                case ('RECYCLEBLOCK'):
                    return 49;
                    break;
                case ('SHORTCUTCOLUMN'):
                    return 68;
                    break;
                case ('SOLARPANEL'):
                    return 50;
                    break;
                case ('SOLIDSSEPARATOR'):
                    return 51;
                    break;
                case ('SPECIFICATIONBLOCK'):
                    return 49;
                    break;
                case ('SPREADSHEET'):
                    return 31;
                    break;
                case ('STREAMMIXER'):
                    return 50;
                    break;
                case ('STREAMSPLITTER'):
                    return 50;
                    break;
                case ('SWITCH'):
                    return 35;
                    break;
                case ('TANK'):
                    return 48;
                    break;
                case ('VALVE'):
                    return 44;
                    break;
                case ('WATERELECTROLYZER'):
                    return 50;
                    break;
                case ('WINDTURBINE'):
                    return 49;
                    break;
            }
        }

        //Отрисовка графа
        function graphCreate(model) {
            for (let key in model.DWSIM_Simulation_Data.SimulationObjects.SimulationObject) {
                let productName = model.DWSIM_Simulation_Data.SimulationObjects.SimulationObject[key].ProductName;
                let name = model.DWSIM_Simulation_Data.SimulationObjects.SimulationObject[key].Name;

                vertex.push(graph.insertVertex(parent, name + '/' + productName, null, 20 + Math.floor(Math.random() * 200), 20 + Math.floor(Math.random() * 200), figureSizeWidth(productName), figureSizeHeight(productName), switchType(productName)));

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