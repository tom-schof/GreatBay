var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "database"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected as id " + connection.threadId  + "\n");
    inquirer.prompt([{
        type: "list",
        name: "commands",
        message: "What do you want to do?",
        choices: ["POST", "BID"]
      }, ]).then(function (data) {

        if (data.commands == "POST"){
            post();
        }else{
            bid();
        }

});

});
function createPost() {
    console.log("Posting a new item...\n");
    var query = connection.query(
        "INSERT INTO items SET ?",
        {

        
        },
        function(err, res){
            console.log(res.affectedRows + "item inserted!\n");
            updatePost();
        }
    )
};


function updatePost(){

}

function deletePost(){

}

function readPost(){

}

function bid(){

}