/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    var count = 0;
    for (var h = 0; h < grid.length; h++){
        for(var w = 0; w < grid[h].length; w++){
            if(grid[h][w] == '1'){
                count ++;
                mapIsland(h, w, grid);
            }
        }
    }
    
    return count;
};

var mapIsland = function (h, w, grid){
    if(grid[h][w] == '0'){
        return;
    }
    grid[h][w] = '0';
    mapIsland(h, w+1, grid);
    mapIsland(h+1, w, grid);
    mapIsland(h+1, w+1, grid);
}