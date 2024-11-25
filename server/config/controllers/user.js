const db = require('../db');

exports.createUser = (req, res) => {
    const { us_first_name, us_last_name, us_email, us_phone, us_state, us_city, us_pincode, us_id } = req.body;
    var query     = "";
    var values    = [];
    
    if(us_id != 0 && us_id != "")
    {
        query = `UPDATE users SET us_first_name = ?, us_last_name = ?, us_email = ?, us_phone = ?, us_state = ?, us_city = ?, us_pincode = ? WHERE us_id = ?`;
        values = [us_first_name, us_last_name, us_email, us_phone, us_state, us_city, us_pincode, us_id];
    }
    else
    {
        query = `INSERT INTO users (us_first_name, us_last_name, us_email, us_phone, us_state, us_city, us_pincode) VALUES (?, ?, ?, ?, ?, ?, ?)`;
        values = [us_first_name, us_last_name, us_email, us_phone, us_state, us_city, us_pincode];
    }

    db.query(query, values, (error, results) => {        
        if (error) 
        {
            console.error('Error inserting user:', error);
            return res.status(500).json({message: 'Failed to create user', error: true});
        }
        
        const message   = us_id && us_id != 0 ? 'User updated successfully' : 'User created successfully';
        const userId    = us_id && us_id != 0 ? us_id : results.insertId;

        res.status(200).json({message: message,  userId: userId, error: false});
    });
};

exports.getUsers = (req, res) => {
    const query = 'SELECT * FROM users ORDER BY us_id DESC';
    db.query(query, (error, results) => {
        if (error) 
        {
            console.error('Error fetching users:', error);
            return res.status(500).json({ message: 'Failed to fetch users', error: true});
        }
        res.status(200).json({data: results,  message: 'Users data found successfully', error: false});
    });
};

exports.deleteUser = (req, res) => {
    const { us_id } = req.body;

    if (!us_id) {
        return res.status(400).json({ message: 'User ID is required', error: true });
    }

    const query = 'DELETE FROM users WHERE us_id = ?';
    const values = [us_id];

    db.query(query, values, (error, results) => {
        if (error) {
            console.error('Error deleting user:', error);
            return res.status(500).json({ message: 'Failed to delete user', error: true });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'User not found', error: true });
        }

        res.status(200).json({ message: 'User deleted successfully', error: false });
    });
};
