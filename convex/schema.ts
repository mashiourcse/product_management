import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Other tables here...

  brandedFoods: defineTable({
    brandOwner: v.string(),
    brandedFoodCategory: v.string(),
    calcium: v.float64(),
    calories: v.float64(),
    carbohydrates: v.float64(),
    cholesterol: v.float64(),
    description: v.string(),
    fat: v.float64(),
    fiber: v.float64(),
    iron: v.float64(),
    name: v.string(),
    protein: v.float64(),
    servingSize: v.union(v.float64(), v.string()),
    servingSizeUnit: v.string(),
    sodium: v.float64(),
    sugars: v.float64(),
  }).index("by_brandOwner", ["brandOwner"]),
});
