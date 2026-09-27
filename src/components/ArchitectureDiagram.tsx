import { useState } from "react";
import { ArrowRight, Layers } from "lucide-react";
import { architectures } from "../data/portfolio";
export function ArchitectureDiagram() {
  const [architectureId, setArchitectureId] = useState(architectures[0].id);
  const architecture =
    architectures.find((item) => item.id === architectureId) ??
    architectures[0];
  const [nodeId, setNodeId] = useState(architecture.nodes[0].id);
  const selected =
    architecture.nodes.find((node) => node.id === nodeId) ??
    architecture.nodes[0];
  return (
    <div className="architecture-workspace">
      <div className="architecture-toolbar">
        <div
          className="architecture-switch"
          role="group"
          aria-label="Choose architecture"
        >
          {architectures.map((item) => (
            <button
              key={item.id}
              aria-pressed={architecture.id === item.id}
              onClick={() => {
                setArchitectureId(item.id);
                setNodeId(item.nodes[0].id);
              }}
            >
              {item.id === "delivery"
                ? "Application delivery"
                : "Infrastructure provisioning"}
            </button>
          ))}
        </div>
        <span className="diagram-label">
          <Layers size={14} /> CONCEPTUAL OVERVIEW
        </span>
      </div>
      <div className="diagram-body">
        <div className="diagram-heading">
          <h3>{architecture.title}</h3>
          <p>{architecture.summary}</p>
        </div>
        <div
          className="diagram-flow"
          aria-label={`${architecture.title} stages`}
        >
          {architecture.nodes
            .filter((node) => node.kind !== "support")
            .map((node, index) => (
              <div className="node-wrapper" key={node.id}>
                <button
                  className={`architecture-node ${selected.id === node.id ? "selected" : ""}`}
                  aria-pressed={selected.id === node.id}
                  aria-controls="architecture-detail"
                  onClick={() => setNodeId(node.id)}
                >
                  <span className="node-index">0{index + 1}</span>
                  <strong>{node.label}</strong>
                  <span>{node.subtitle}</span>
                </button>
                {index <
                  architecture.nodes.filter((node) => node.kind !== "support")
                    .length -
                    1 && (
                  <ArrowRight
                    className="node-arrow"
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
        </div>
        {architecture.nodes.some((node) => node.kind === "support") && (
          <>
            <p className="support-label">
              RUNTIME ROUTING & SUPPORTING CONTROLS
            </p>
            <div className="diagram-flow">
              {architecture.nodes
                .filter((node) => node.kind === "support")
                .map((node) => (
                  <button
                    key={node.id}
                    className={`architecture-node ${selected.id === node.id ? "selected" : ""}`}
                    aria-pressed={selected.id === node.id}
                    aria-controls="architecture-detail"
                    onClick={() => setNodeId(node.id)}
                  >
                    <strong>{node.label}</strong>
                    <span>{node.subtitle}</span>
                  </button>
                ))}
            </div>
          </>
        )}
        <div
          className="architecture-detail"
          id="architecture-detail"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="detail-icon">
            <Layers size={22} />
          </span>
          <div>
            <span className="eyebrow">COMPONENT NOTES</span>
            <h4>{selected.label}</h4>
            <p>{selected.detail}</p>
          </div>
        </div>
        <p className="diagram-scope">
          {architecture.scope} Select a component to read its role.
        </p>
      </div>
    </div>
  );
}
