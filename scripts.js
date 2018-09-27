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
    console.log("updating post...\n");
    var query = connection.query(
        "UPDATE items Set? WHERE?",
        [

        ],
        function(err, res) {
            console.log(res.affectedRows + "post updated!\n");
        }
    );


}

function deletePost(){
 console.log("Deleting post...\n");
  connection.query(
    "DELETE FROM products WHERE ?",
    {
     
    },
    function(err, res) {
      console.log(res.affectedRows + " post deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

function readPost(){
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });

}

function bid(){

}