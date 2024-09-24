import UnderlinedText from "@/components/decorators/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "ku soco masaafo dheer",
		description:
			"waxay noqon doonaan kuwo ku xiiso galiya.",
		image: "/gifs/gif1.gif",
	},
	{
		title: "ku soco masaafo dheer",
		description:
			"Ku xooji xirfadahaaga  faahfaahsan. Haddii aad doonayso labiska kabaha, ku socodkooda, caadiga ah, ku hel farsamooyinka ilbiriqsiyo gudahood..",
		image: "/gifs/gif2.gif",
	},
	{
		title: "ku soco masaafo dheer",
		description: "dalbo hada.",
		image: "/gifs/gif3.gif",
	},
];

const featureList: string[] = [
	"ku soco masaafo dheer",
	"ku soco masaafo dheer",
	"ku soco masaafo dheer",
	"ku soco masaafo dheer",
	"ku soco masaafo dheer",
	"ku soco masaafo dheer",
];

const Features = () => {
	return (
		<section className='container py-24 sm:py-32 space-y-8'>
			<h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
				Many <UnderlinedText className='underline-offset-8'>cityshose</UnderlinedText> Features 👟 
			</h2>

			<div className='flex flex-wrap md:justify-center gap-4'>
				{featureList.map((feature) => (
					<div key={feature}>
						<Badge className='text-sm rounded-full' variant={"secondary"}>
							{feature}
						</Badge>
					</div>
				))}
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{features.map(({ title, description, image }) => (
					<Card key={title} className='flex flex-col'>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter className='mt-auto'>
							<img
								src={image}
								alt='Feature Item'
								className='rounded w-[250px] h-32 lg:w-[300px]  mx-auto z-0 select-none pointer-events-none'
							/>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};
export default Features;
