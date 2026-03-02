export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h1>Movie Picker</h1>
      <p style={{ marginTop: "1rem", color: "#666", fontSize: "1.1rem" }}>
        Discover your next favorite movie
      </p>
    </main>
  );
}
