const Footer = () => {
	return (
		<footer className='md:px-8 md:py-0 border-t'>
			<div className='container flex  items-center gap-4 h-24'>
				<p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
					lasoo xiriir {" "}
					<a
						href='https://www.facebook.com/nasrudiin.nuur.313'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						halkaan
					</a>
					. AI gaan wuxuu kuu aqrinayaa links si add Summize ugu samaysid, soo koobid, sidoo kale maqaal il-furan oo maqaallo dhaadheer u rogaya qoraal cad oo kooban. {" "}
					<a
						href='https://sookoob-sida-chat-gpt.vercel.app/'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						halkaan riix👇
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;
