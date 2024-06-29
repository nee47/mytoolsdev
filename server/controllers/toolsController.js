import Tools from "../models/tool.model.js";

export async function createTool(req, res) {
  try {
    const userId = req.user.id;
    const tool = new Tools({
      title: req.body.title,
      description: req.body.description,
      path: req.body.path,
      owner: userId,
    });

    const savedTool = await tool.save();

    res.status(200).json({
      message: "Tool saved correctly.",
    });
  } catch (error) {
    res.status(400).json({
      error: "Tool creation error.",
    });
  }
}

export async function getTools(req, res) {
  try {
    const ownerId = req.user.id;
    const tools = await Tools.find({ owner: ownerId });

    res.status(200).json(
      tools.map((t) => ({
        title: t.title,
        path: t.path,
      }))
    );
  } catch (error) {
    res.status(400).json({
      error: "No tools found.",
    });
  }
}

export async function deleteTool(req, res) {
  try {
    console.log(` req parmas id: ${req.params.id}`);

    const t = await Tools.findById(req.params.id);

    if (req.user.id != t.owner)
      return res.status(400).json({
        error: "Can't delete another's user tool.",
      });

    const tool = await Tools.findByIdAndDelete(req.params.id);

    if (!tool)
      return res.status(400).json({
        error: "Tool not found",
      });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({
      error: error.message,
    });
  }
}
