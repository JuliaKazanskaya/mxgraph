const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
    mode = 'production';
    target = 'browserslist';
}

const plugins = [
    new MiniCssExtractPlugin({
        filename: 'index.css',
    }),
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    new CopyPlugin({
        patterns: [
            { from: "src/images", to: "images" },
        ],
    }),
];

module.exports = {
    mode,
    target,
    plugins,
    devtool: 'source-map',
    entry: './src/index.js',
    devServer: {
        hot: true,
        compress: true,
        port: 9000,
        watchFiles: ["./src/*"],
        open: true,
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
            {
                test: /\.(css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: require.resolve('mxgraph/javascript/mxClient'),
                use: 'exports-loader?' +
                    'mxClient,mxLog,mxObjectIdentity,mxDictionary,mxResources,mxEffects,mxUtils,mxConstants,mxEvent,mxClipboard,mxUrlConverter,mxVmlCanvas2D,mxStencilRegistry,' +
                    'mxMarker,mxHierarchicalEdgeStyle,mxCellPath,mxPerimeter,mxEdgeStyle,mxStyleRegistry,mxCodecRegistry,mxGenericChangeCodec,mxStylesheetCodec,mxDefaultToolbarCodec,' +
                    'mxGraph,mxRubberband,mxHierarchicalLayout,mxFastOrganicLayout,mxGraphModel,mxPanningHandler,mxKeyHandler,mxParallelEdgeLayout,mxLayoutManager,mxCompactTreeLayout,' +
                    'mxPrintPreview,mxToolbar,mxOutline,mxCellTracker,mxCellOverlay,mxImage,mxLoadResources,mxPopupMenu,mxCylinder,mxRectangle,mxCellRenderer,mxVertexHandler,mxPoint,' +
                    'mxHandle,mxRhombus, mxActor,mxArrow,mxArrowConnector,mxCloud,mxConnector,mxConnector,mxEllipse,mxHexagon,mxImageShape,mxLabel,mxLine,mxPolyline,mxMarker,mxRectangleShape,' +
                    'mxShape,mxStencil,mxStencilRegistry,mxSwimlane,mxText,mxTriangle,mxAutoSaveManager,mxDivResizer,mxForm,mxGuide,mxImageBundle,mxImageExport,mxLog,mxMorphing,mxMouseEvent,' +
                    'mxPanningManager,mxSvgCanvas2D,mxUndoableEdit,mxUndoManager,mxUrlConverter,mxWindow,mxXmlCanvas2D,mxXmlRequest,mxCellEditor,mxCellState,mxCellStatePreview,mxConnectionConstraint,' +
                    'mxGraphSelectionModel,mxGraphView,mxMultiplicity,mxSwimlaneManager,mxTemporaryCellStates,mxGeometry,mxStackLayout,mxRadialTreeLayout,mxPartitionLayout,mxGraphLayout,' +
                    'mxEdgeLabelLayout,mxCompositeLayout,mxCircleLayout,mxSwimlaneOrdering,mxMinimumCycleRemover,mxMedianHybridCrossingReduction,mxHierarchicalLayoutStage,mxCoordinateAssignment,' +
                    'mxSwimlaneLayout,mxObjectCodec,mxGenericChangeCodec,mxTooltipHandler,mxSelectionCellsHandler,mxPopupMenuHandler,mxGraphHandler,mxElbowEdgeHandler,mxEdgeHandler,' +
                    'mxConstraintHandler,mxConnectionHandler,mxCellMarker,mxCellHighlight,mxDefaultPopupMenu,mxDefaultKeyHandler,mxCodec,mxGraphHierarchyModel,mxGraphAbstractHierarchyCell,' +
                    'mxGraphHierarchyEdge,mxGraphHierarchyNode,mxSwimlaneModel,mxEdgeSegmentHandler'
            },
        ],
    },
};