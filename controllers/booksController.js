const db = require("../models");

module.exports = {
    findAll: async function(req, res) {
        try {
            const dbModel = await db.Book
                .find(req.query)
                .sort({ date: -1 })
                .exec();
            
            res.json({
                success: true,
                data: dbModel
            });
        } catch (err) {
            console.error("Error in findAll:", err);
            res.status(422).json({
                success: false,
                error: err.message || "Error fetching books"
            });
        }
    },

    findById: async function(req, res) {
        try {
            const dbModel = await db.Book
                .findById(req.params.id)
                .exec();
            
            if (!dbModel) {
                return res.status(404).json({
                    success: false,
                    error: "Book not found"
                });
            }

            res.json({
                success: true,
                data: dbModel
            });
        } catch (err) {
            console.error("Error in findById:", err);
            res.status(422).json({
                success: false,
                error: err.message || "Error fetching book"
            });
        }
    },

    create: async function(req, res) {
        try {
            console.log("CONTROLLER = " + JSON.stringify(req.body));
            console.log("In create = " + req.body.bookId);

            const existingBook = await db.Book
                .findOne({ bookId: req.body.bookId })
                .exec();

            if (existingBook) {
                console.log("book already in db");
                return res.status(409).json({
                    success: false,
                    error: "Book already exists"
                });
            }

            console.log("book NOT already in db");
            const dbModel = await db.Book.create(req.body);
            
            res.status(201).json({
                success: true,
                data: dbModel
            });
        } catch (err) {
            console.error("Error in create:", err);
            res.status(422).json({
                success: false,
                error: err.message || "Error creating book"
            });
        }
    },

    update: async function(req, res) {
        try {
            const dbModel = await db.Book
                .findByIdAndUpdate(
                    req.params.id,
                    req.body,
                    { new: true, runValidators: true }
                )
                .exec();

            if (!dbModel) {
                return res.status(404).json({
                    success: false,
                    error: "Book not found"
                });
            }

            res.json({
                success: true,
                data: dbModel
            });
        } catch (err) {
            console.error("Error in update:", err);
            res.status(422).json({
                success: false,
                error: err.message || "Error updating book"
            });
        }
    },

    remove: async function(req, res) {
        try {
            console.log("in remove id:", req.params.id);
            
            const dbModel = await db.Book
                .findByIdAndDelete(req.params.id)
                .exec();

            if (!dbModel) {
                return res.status(404).json({
                    success: false,
                    error: "Book not found"
                });
            }

            res.json({
                success: true,
                message: "Book successfully deleted",
                data: dbModel
            });
        } catch (err) {
            console.error("Error in remove:", err);
            res.status(422).json({
                success: false,
                error: err.message || "Error deleting book"
            });
        }
    }
};