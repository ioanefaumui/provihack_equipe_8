const Container = ({ size, children }) => {
  return (
    <div
      style={{
        width: `min(100% - 40px, ${size}px)`,
        marginInline: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
