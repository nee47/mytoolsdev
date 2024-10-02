import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createTool(req, res) {
  try {
    const userId = req.user.id;

    const tooly = await prisma.tools.create({
      data: {
        title: req.body.title,
        description: req.body.description || "",
        url: req.body.url,
        owner: userId,
      },
    });

    res.status(200).json({
      message: "Tool saved correctly.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "Tool creation error.",
    });
  }
}

export async function getTools(req, res) {
  try {
    const ownerId = req.user.id;
    //const tools = await Tools.find({ owner: ownerId });
    const tools = await prisma.users.findUnique({
      where: {
        id: ownerId,
      },
      include: {
        tools: true,
      },
    });

    console.log(tools);

    res.status(200).json(
      tools.tools.map((t) => ({
        title: t.title,
        description: t.description,
        url: t.url,
      }))
    );
  } catch (error) {
    res.status(400).json({
      error: "No tools found",
    });
  }
}

// export async function deleteTool(req, res) {
//   try {
//     console.log(` req parmas id: ${req.params.id}`);

//     const t = await Tools.findById(req.params.id);

//     if (req.user.id != t.owner)
//       return res.status(400).json({
//         error: "Can't delete another's user tool.",
//       });

//     const tool = await Tools.findByIdAndDelete(req.params.id);

//     if (!tool)
//       return res.status(400).json({
//         error: "Tool not found",
//       });

//     return res.sendStatus(204);
//   } catch (error) {
//     return res.status(404).json({
//       error: error.message,
//     });
//   }
// }

export async function createPublicTool(req, res) {
  try {
    //const tools = await PublicTools.find();
    console.log("creando public tool");
    const tools = await prisma.publicTools.create({
      data: {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description || "",
        style: req.body.style || "default",
        categories: {
          connectOrCreate: req.body.categories.map((cat) => ({
            where: {
              name: cat,
            },
            create: {
              name: cat,
            },
          })),
        },
      },
    });

    console.log(tools);

    res.status(200).json({
      message: "public tool created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "No public tools found",
    });
  }
}

export async function getPublicTools(req, res) {
  try {
    //const tools = await PublicTools.find();
    const tools = await prisma.publicTools.findMany({
      include: {
        categories: true,
      },
    });
    console.log(tools);
    res.status(200).json(
      tools.map((t) => ({
        id: Number(t.id),
        title: t.title,
        url: t.url,
        description: t.description,
        style: t.style || "default",
        categories: t.categories.map((c) => ({
          name: c.name,
          id: Number(c.id),
        })),
      }))
    );
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "No public tools found",
    });
  }
}
