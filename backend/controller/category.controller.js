const db = require("../models/index")
const Category = db.Category;

const getAllCategories =async (req, res) => {
    try {
    const categories  = await Category.findAll();
    res.status(200).json(categories);
    } catch (error) {
    res.status(500).json({ error: error.message });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch category", error });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        category.name = name;
        await category.save();
        res.status(200).json({ message: "Category updated", category });
    } catch (error) {
        res.status(500).json({ message: "Failed to update category", error });
    }
};
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        await category.destroy();
        res.status(200).json({ message: "Category deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete category", error });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
}