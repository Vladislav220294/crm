import connectDB from "@/lib/mongodb";

export async function GET() {
    try {
        await connectDB();
        return Response.json({ status: "ok" });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        return Response.json({ status: "error", message: "mongodb connection error" }, { status: 500 });
    }
}