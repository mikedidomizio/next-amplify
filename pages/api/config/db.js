const mysql = require('mysql');

export async function query(
) {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: process.env.HOST,
            user: 'testtest',
            password: process.env.PASSWORD,
            database: 'sys',
            port: '3306'
        });

        try {
            console.log('let us pray3', process.env.HOST, process.env.PASSWORD.substring(0, 5))

            connection.connect();

            connection.query('SELECT * from users', function (err, rows, fields) {
                if (err) console.log(err);
                console.log('The solution is: ', rows, fields);
                connection.end();
                resolve(rows);
            });
        } catch(e) {
            reject(e);
        }
    });
}
