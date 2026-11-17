import {Sequelize, DataTypes} from "sequelize"

//modelpaths

const sequelize = new Sequelize(
    process.env.DB_NAME!,
    process.env.DB_USERNAME!,
    process.env.DB_PASSWORD!,
    {
        host: process.env.DB_HOSTNAME!,
        dialect: "mariadb",
        logging: console.log
    }
)

//andmebaasiühendus
const connect = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log("Connection established")
    } catch (error) {
        console.log("db connection error", error)
    }
}

//mudeli registratsioon

//andmebaasi instants ja seostused

const db = {
    Sequelize, sequelize,
     //(modelobj)
}

const sync = async(): Promise<void> => {
    await sequelize.sync({alter:true})
    console.log("Synchornization comp1337")
}

export {db, sync, connect}