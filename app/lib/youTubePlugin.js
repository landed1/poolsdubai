import { visit } from "unist-util-visit";

function remarkYouTubeEmbed() {
  return (tree) => {
    visit(tree, "text", (node, index, parent) => {
      const youtubeRegex = /{{< youtube (\S+) >}}/;
      const match = youtubeRegex.exec(node.value);
      if (match) {
        const videoId = match[1];
        parent.children[index] = {
          type: "html",
          value: `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" ></iframe>`,
        };
        //console.log("youtubeRegex match", videoId);
      }
    });
  };
}

export default remarkYouTubeEmbed;
