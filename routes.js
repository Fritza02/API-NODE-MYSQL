const express = require('express');
const routes = express.Router();

// rutas
routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if(err) return res.send(err);

        conn.query('SELECT * FROM tableproducts', (err, rows) => {
            if(err) return res.send(err);
            res.json(rows);
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('INSERT INTO tableproducts set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);
            res.send('products added!');
        })
    })
})

/*routes.get('/producto/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('SELECT Producto, Descripcion FROM tableproducts WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.json(rows);
        })
    })
})*/

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('DELETE FROM tableproducts WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send('products excluded!');
        });
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);
        conn.query('UPDATE tableproducts set ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send('products updated!');
        })
    })
})





module.exports = routes;