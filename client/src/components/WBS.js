import React, { Component } from "react";
import mf from "diagram-library";
import { DiagramView, NodeListView } from "diagram-library-react";

class WBS extends Component {
  constructor(props) {
    super(props);

    var diagram = new mf.Diagramming.Diagram();
    diagram.setAllowInplaceEdit(true);
    var nodes = [];
    var shapeIds = [
      "Actor",
      "RoundRect",
      "Ellipse",
      "DividedEvent",
      "CreateRequest",
      "Rectangle",
      "DirectAccessStorage",
      "Alternative",
      "Arrow3",
      "Arrow5",
    ];
    var name = [
      "Actor",
      "RoundRect",
      "Ellipse",
      "State",
      "Class",
      "Rectangle",
      "Storage",
      "Triangle",
      "Arrow3",
      "Arrow5",
    ];

    for (var i = 0; i < shapeIds.length; i++) {
      var node = new mf.Diagramming.ShapeNode(diagram);
      node.setText(shapeIds[i]);
      node.setShape(shapeIds[i]);
      nodes.push(node);
    }

    this.state = {
      diagram: diagram,
      nodes: nodes,
      captions: name,
    };
  }

  render() {
    var props = {
      id: "diagram1",
      backBrush: "#f2f2f2",
    };
    return (
      <>
        <div style={{ position: "absolute", marginLeft: "90%" }}>
          <div>
            <input
              class="btn"
              id="save"
              type="button"
              value="Save"
              onClick={() => {
                localStorage.setItem("jsdiagram", this.state.diagram.toJson());
              }}
            />
          </div>
          <div>
            <input
              class="btn"
              id="load"
              type="button"
              value="Load"
              onClick={() => {
                var diagramString = localStorage.getItem("jsdiagram");
                this.state.diagram.fromJson(diagramString);
              }}
            />
          </div>
        </div>
        <div className="container" style={{ marginLeft: "150px" }}>
          <div className="sidebar-left">
            <NodeListView
              nodes={this.state.nodes}
              captions={this.state.captions}
            ></NodeListView>
          </div>
          <div className="main">
            <DiagramView diagram={this.state.diagram} {...props} />
          </div>
        </div>
      </>
    );
  }
}

export default WBS;
