import inquirer from "inquirer";
async function main() {
    let { task } = await inquirer.prompt([{
            type: "input",
            name: "task",
            message: "what you want to add"
        }]);
    console.log(`added task: ${task}`);
}
main();
