export default function Home() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "50px auto",
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "32px", color: "#111" }}>💬 我的 AI 工具</h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "30px" }}>
        输入你的问题，AI 马上为你回答
      </p>

      <div style={{
        border: "1px solid #eee",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}>
        <textarea
          placeholder="请输入你想问的内容..."
          style={{
            width: "100%",
            height: "120px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px",
            fontSize: "16px",
            resize: "none",
            marginBottom: "15px"
          }}
        ></textarea>

        <button style={{
          backgroundColor: "#0071e3",
          color: "#fff",
          border: "none",
          padding: "12px 25px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          🚀 发送给 AI
        </button>
      </div>

      <div style={{ marginTop: "40px", color: "#999", fontSize: "14px" }}>
        © 2025 我的第一个 AI 网站 | 由我亲手部署上线
      </div>
    </div>
  );
}