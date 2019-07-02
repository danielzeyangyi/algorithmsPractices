/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  const pathBuilder = [];

  var numOfIsland = function(graph) {
    for (var i = 0; i < graph.length; i++) {
      for (var j = 0; j < graph[0].length; j++) {
        if (graph[i][j] === 1) {
          pathBuilder.push([]);
          dfs(graph, i, j, 0);
        }
      }
    }

    return new Set(pathBuilder.map(path => path.toString())).size;
  };

  var dfs = function(graph, r, c, i) {
    if (
      r >= 0 &&
      c >= 0 &&
      r < graph.length &&
      c < graph[0].length &&
      graph[r][c]
    ) {
      pathBuilder[pathBuilder.length - 1].push(i);
      graph[r][c] = 0;

      dfs(graph, r + 1, c, 1);
      dfs(graph, r - 1, c, 2);
      dfs(graph, r, c + 1, 3);
      dfs(graph, r, c - 1, 4);
      pathBuilder[pathBuilder.length - 1].push(i);
    }
  };

  return numOfIsland(grid);
};
