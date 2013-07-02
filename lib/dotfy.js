// Loading helper modules
var _ = require('underscore');

/**
 * Dotfy Class definition
 *
 * @param data
 * @constructor
 */
Dotfy = function(data){

    this.chars = [
        [' ', '⢀','⢠','⢰','⢸'],
        ['⡀', '⣀','⣠','⣰','⣸'],
        ['⡄', '⣄','⣤','⣴','⣼'],
        ['⡆', '⣆','⣦','⣶','⣾'],
        ['⡇', '⣇','⣧','⣷','⣿']
    ];

    /**
     * Proportion, helper function
     * @param value
     * @param max
     * @param minrange
     * @param maxrange
     * @returns {number}
     */
    this.proportion = function(value, max, minrange, maxrange) {
        return Math.round(((max - value) / (max)) * (minrange - maxrange)) + maxrange;
    };

    this.processInput(data);
};

/**
 * Shows the related help
 */
Dotfy.prototype.printHelp = function(){
    console.log("Usage: dotfy value1 value2 value3 ... valueN");
    console.log("");
    console.log("Example: dotfy 3 4 6 7 1 2 4 6 0 0 1 3 6 9 6 3 1");
    console.log("⣠⣴⣶⡆⢀⣠⣴⡆  ⢀⣰⣾⣷⣆⡀");
};

/**
 * Construct the actual string to return as a result
 * @param tokens
 */
Dotfy.prototype.plot = function(tokens){
    var len = tokens.length,
        g = '',
        i = 0;

    for(i; i < len; i++){
        if(i + 1 < len){
            g = g + this.chars[tokens[i]][tokens[i+1]]
        }
    }
    console.log(g);
};

/**
 * Checks if the arguments are valid and starts the script
 * @param args
 */
Dotfy.prototype.processInput = function(args){
    args = args || [];
    if (!_.isArray(args) || args.length == 0){
        this.printHelp();
        process.exit(0);
    } else {
        // TODO filter data
        var tokens = [],
            max = args[1],
            len = args.length,
            i;

        // Weird fact: Math.max(args) ignores the last item if it's the max value
        for(i = 0; i < len; i++){
            max = (parseInt(args[i]) > max)? args[i] : max;
        }
        for(i = 0; i < len; i++){
            tokens.push(this.proportion(args[i], max, 0, 4));
        }



        this.plot(tokens);
    }
};
