/**
 * @param {character[][]} grid
 * @return {number}
 */
// var numIslands = function(grid) {
//     var count = 0;
//     for (var h = 0; h < grid.length; h++){
//         for(var w = 0; w < grid[h].length; w++){
//             if(grid[h][w] == '1'){
//                 count ++;
//                 mapIsland(h, w, grid);
//             }
//         }
//     }

//     return count;
// };

// var mapIsland = function (h, w, grid){
//     if(grid[h][w] == '0'){
//         return;
//     }
//     grid[h][w] = '0';
//     mapIsland(h, w+1, grid);
//     mapIsland(h+1, w, grid);
//     mapIsland(h+1, w+1, grid);
// }
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid) return 0;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        dfs(grid, i, j);
        count++;
      }
    }
  }

  return count;
};

var dfs = function(grid, r, c) {
  if (r >= 0 && c >= 0 && r < grid.length && c < grid[0].length && grid[r][c]) {
    grid[r][c] = 0;

    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
  }
};
