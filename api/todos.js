let todos = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(todos);
  }

  if (req.method === "POST") {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const newTodo = {
      id: Date.now(),
      text,
    };

    todos.push(newTodo);

    return res.status(201).json(newTodo);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
