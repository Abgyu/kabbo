import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import RotatedText from "@/components/decorators/RotatedText";

const reviews = [
	{
		name: "saalax",
		username: "saalax123@gmail.com",
		body: "aad baan ugu faraxsanahay inaa ku soobiiro meeshaan",
		img: "https://avatar.vercel.sh/jack",
	},
	{
		name: "Jabriil ibraahim",
		username: "jabriil123@gmail.com",
		body: "waa platform aad u wanaagsan waana ku faraxsanahay ",
		img: "https://avatar.vercel.sh/jill",
	},
	{
		name: "safiyo",
		username: "safiyo123@gmail.com",
		body: "Great job!",
		img: "https://avatar.vercel.sh/john",
	},
	{
		name: "asha",
		username: "ashaahmed13@gmail.com",
		body: " Amazing!",
		img: "https://avatar.vercel.sh/jane",
	},
	{
		name: "ahmed",
		username: "ahmed88@gmail.com",
		body: " I love it this paltform !",
		img: "https://avatar.vercel.sh/jenny",
	},
	{
		name: "Jamac",
		username: "jamac23@gmail.com",
		body: "aad baa u mahadsantihiin",
		img: "https://avatar.vercel.sh/james",
	},
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
	return (
		<figure
			className={cn(
				"relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
				// light styles
				"border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
				// dark styles
				"dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
			)}
		>
			<div className='flex flex-row items-center gap-2'>
				<img className='rounded-full' width='32' height='32' alt='' src={img} />
				<div className='flex flex-col'>
					<figcaption className='text-sm font-medium dark:text-white'>{name}</figcaption>
					<p className='text-xs font-medium dark:text-white/40'>{username}</p>
				</div>
			</div>
			<blockquote className='mt-2 text-sm'>{body}</blockquote>
		</figure>
	);
};
// https://shipixen.com/shadcn-pricing-page

const Testimonials = () => {
	return (
		<div className='mt-12'>
			<h1 className='text-3xl sm:text-4xl md:text-5xl text-center tracking-tighter font-bold'>
				maxay  <RotatedText>naga</RotatedText>yiraahdeen macaamiishena
			</h1>

			<p className='mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center'>
				kuwaan waa macaamiishena iyo wixii ku farxad galiyay inay nagu sooiiraan.
			</p>

			<div className='relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl'>
				<Marquee pauseOnHover className='[--duration:20s]'>
					{firstRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<Marquee reverse pauseOnHover className='[--duration:20s]'>
					{secondRow.map((review) => (
						<ReviewCard key={review.username} {...review} />
					))}
				</Marquee>
				<div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
				<div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
			</div>
		</div>
	);
};

export default Testimonials;
