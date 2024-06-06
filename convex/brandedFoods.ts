import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    inputData: v.object({
      calories: v.string(),
      protein: v.string(),
      carbohydrates: v.string(),
      cholesterol: v.string(),
      fat: v.string(),
      fiber: v.string(),
      iron: v.string(),
      calcium: v.string(),
      sodium: v.string(),
      sugars: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    // console.log("here!!!!!!");
    let calo = Number(args.inputData.calories);
    let prot = Number(args.inputData.protein);
    let carb = Number(args.inputData.carbohydrates);
    let chol = Number(args.inputData.cholesterol);
    let fat = Number(args.inputData.fat);
    let fib = Number(args.inputData.fiber);
    let iron = Number(args.inputData.iron);
    let calc = Number(args.inputData.calcium);
    let sod = Number(args.inputData.sodium);
    let sug = Number(args.inputData.sugars);

    return await ctx.db
      .query("brandedFoods")
      .filter((q) => q.gte(q.field("calories"), calo))
      .filter((q) => q.gte(q.field("protein"), prot))
      .filter((q) => q.gte(q.field("carbohydrates"), carb))
      .filter((q) => q.gte(q.field("cholesterol"), chol))
      .filter((q) => q.gte(q.field("fat"), fat))
      .filter((q) => q.gte(q.field("fiber"), fib))
      .filter((q) => q.gte(q.field("iron"), iron))
      .filter((q) => q.gte(q.field("calcium"), calc))
      .filter((q) => q.gte(q.field("sodium"), sod))
      .filter((q) => q.gte(q.field("sugars"), sug))
      .take(25);
  },
});

export const get2 = query({
  args: {
    brandOwner: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("brandedFoods")
      .withIndex("by_brandOwner", (q) => q.eq("brandOwner", args.brandOwner))
      .take(100);
  },
});
