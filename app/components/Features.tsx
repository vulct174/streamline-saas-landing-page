import { Zap, Users, BarChart, Lock } from "lucide-react"

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Our optimized platform ensures quick load times and smooth performance.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description: "Work seamlessly with your team in real-time, no matter where they are.",
    },
    {
        icon: BarChart,
        title: "Advanced Analytics",
        description: "Gain valuable insights with our comprehensive reporting tools.",
    },
    {
        icon: Lock,
        title: "Bank-Level Security",
        description: "Your data is protected with state-of-the-art encryption and security measures.",
    },
]

export default function Features() {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose StreamLine?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <feature.icon className="h-12 w-12 text-primary mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

