import RotatedText from "@/components/decorators/RotatedText";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface TeamProps {
	imageUrl: string;
	name: string;
	position: string;
	description: string;
}

const teamList: TeamProps[] = [
	{
		imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocJdLBrFsliKKIomShAIHoH_BHcPUl09HS8RS8E_Ka5AW3QYTuB1=s96-c",
		name: "abdullahi muse ",
		position: "Manager sare",
		description: "abdullahi muse wuxuu hubiyaa habsimi u socdka shaqada. ",
	},
	{
		imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocJdLBrFsliKKIomShAIHoH_BHcPUl09HS8RS8E_Ka5AW3QYTuB1=s96-c",
		name: "ibraahim ahmed",
		position: "kormeeraha company ga",
		description: "ibraahim wuxuu hayaa kormeeraha company ga.",
	},
	{
		imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocJdLBrFsliKKIomShAIHoH_BHcPUl09HS8RS8E_Ka5AW3QYTuB1=s96-c",
		name: "Dr.  geedi",
		position: "xog hayaha",
		description: "Dr.wuxuu hayaa xoghayta ugu saraysa ee company ga.",
	},
	{
		imageUrl: "https://lh3.googleusercontent.com/a/ACg8ocJdLBrFsliKKIomShAIHoH_BHcPUl09HS8RS8E_Ka5AW3QYTuB1=s96-c",
		name: "sakariye xaji",
		position: "lataliyaha",
		description: "la taliyaha ugu sareeya ee company ga. ",
	},

	
];

const Team = () => {
	return (
		<section className='container py-24 sm:py-32'>
			<h2 className='text-2xl sm:text-3xl md:text-5xl text-center tracking-tighter font-bold'>
				ku waan <RotatedText>waa dadka ugu sareeya </RotatedText> company ga
			</h2>

			<p className='mt-4 mb-10 text-md md:text-xl text-muted-foreground text-center'>
				soo dhawow markoowaad labaad iyo sadexaadba.
			</p>

			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10'>
				{teamList.map(({ description, imageUrl, name, position }) => (
					<Card key={name} className='bg-muted/50 relative mt-7 flex flex-col justify-center items-center'>
						<CardHeader className='my-8 flex justify-center items-center pb-2'>
							<img
								src={imageUrl}
								alt='Team member'
								className='absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover'
							/>
							<CardTitle className='text-center'>{name}</CardTitle>
							<CardDescription className='text-primary'>{position}</CardDescription>
						</CardHeader>

						<CardContent className='text-center pb-4 px-2'>
							<p>{description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
		
	);
};
export default Team;
