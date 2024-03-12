import ComfortSection from "./ComfortSection"

const jobOpenings = [
  {
    id: 1,
    role: "Full-time designer",
    href: "#",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    role: "Laravel developer",
    href: "#",
    description:
      "Et veniam et officia dolorum rerum. Et voluptas consequatur magni sapiente amet voluptates dolorum. Ut porro aut eveniet.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    role: "React Native developer",
    href: "#",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
  },
]
const items = [
  {
    title: "100+ Payment Method",
    content:
      "Test your product idea by launching payments with little to no code.",
    icon: "/images/content/icons/credit-card.svg",
  },
  {
    title: "Convert Automatically",
    content:
      "Test your product idea by launching payments with little to no code.",
    icon: "/images/content/icons/credit-card-refresh.svg",
  },
  {
    title: "Manage Funds",
    content:
      "Test your product idea by launching payments with little to no code.",
    icon: "/images/content/icons/coins-hand.svg",
  },
]
const HomeComfort = () => {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-[750px] flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <span>
              <p>Our General And Specialized Services</p>
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Goal Is To Treat Our Patients With Comfort And Compassion.
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              At Urban Luxe, we pride ourselves on offering a range of essential
              features that set us apart. Explore what makes us your ideal
              interior design partner
            </p>
            <img
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
              alt=""
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
        </div>{" "}
        <div className="mt-20 flex flex-row gap-2">
          {items.map((item, index: number) => (
            <ComfortSection
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeComfort
