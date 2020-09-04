const router = require('express').Router();
const mysqlConnection = require('../database/db');


router.get('/', (req, res)=>{    
    mysqlConnection.query("select * from books", (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})

router.put('/bookreturn/:id', (req, res) => {
    const id = req.params.id;
    var status = req.body.status;
    
    mysqlConnection.query("UPDATE books SET status = '"+status+"' WHERE  id = '"+id+"'", (err, data) => {
            if (err) throw err;
            res.send({message: 'Book return successfully.'});
        });
})

router.post('/bookIssue/:id', (req, res) => {
    const id = req.params.id;
    var message;
    var status = req.body.status;
    mysqlConnection.query("INSERT INTO book_issue_details (book_id, issue_date) VALUES ('"+id+"', CURDATE())", (err, result) => {
        if (err) throw err;
        mysqlConnection.query("UPDATE books SET status = '"+status+"' WHERE  id = '"+id+"'", (err, data) => {
            if (err) throw err;
            res.send({message: 'Book issued successfully.'});
        });        
    });
});

router.get('/pastRecords', (req, res) => {
    mysqlConnection.query("SELECT book_issue_details.issue_date AS issue_date, books.name AS name FROM book_issue_details LEFT JOIN books ON book_issue_details.book_id = books.id where book_issue_details.issue_date BETWEEN CURDATE() - INTERVAL 30 DAY AND CURDATE()", (err, data) => {
        if (err) throw err;
        res.send(data);
    })
})
module.exports = router;