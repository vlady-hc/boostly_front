import React, { useState, useRef } from "react";

interface Props {
  image: string;
  zoom: string;
}

const ProductZoom: React.FC<Props> = ({ image, zoom }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  const imgRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = imgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  return (
    <div style={{ display: "flex", gap: 20 }}>
      
      {/* Imagen principal */}
      <div
        ref={imgRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
        style={{
          width: 400,
          height: 400,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 10,
          cursor: "zoom-in",
          position: "relative",
          overflow: "hidden",
        }}
      />

      {/* Zoom lateral */}
      {showZoom && (
        <div
          style={{
            width: 400,
            height: 400,
            border: "1px solid #ddd",
            backgroundImage: `url(${zoom})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "1500px 1500px",
            backgroundPosition: `-${position.x * 3}px -${position.y * 3}px`,
            borderRadius: 10,
          }}
        />
      )}
    </div>
  );
};

export default ProductZoom;
