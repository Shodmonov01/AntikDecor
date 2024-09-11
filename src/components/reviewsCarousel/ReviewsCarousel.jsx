import './reviews.carousel.scss';

function ReviewsCarousel() {
	return (
		<div className='reviews-carousel'>
			<section className='section'>
				<div className='container'>
					<h2 className='subtitle'>Отзывы</h2>

					<div
						className='reviews'
						style={{
							maxWidth: '760px',
							height: '800px',
							overflow: 'hidden',
							position: 'relative',
						}}>
						<iframe
							title='hello'
							style={{
								width: '100%',
								height: '100%',
								border: '1px solid #e6e6e6',
								borderRadius: '8px',
								boxSizing: 'border-box',
							}}
							src='https://yandex.ru/maps-reviews-widget/96085923111?comments'></iframe>
						<a
							href='https://yandex.ru/maps/org/antikdecor/96085923111/'
							target='blank'
							style={{
								boxSizing: 'border-box',
								textDecoration: 'none',
								color: '#b3b3b3',
								fontSize: '10px',
								fontFamily: 'YS Text,sans-serif',
								padding: '0 20px',
								position: 'absolute',
								bottom: '8px',
								width: '100%',
								textAlign: 'center',
								left: '0',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
								display: 'block',
								maxHeight: '14px',
								whiteSpace: 'nowrap',
							}}>
							Antikdecor — Яндекс Карты
						</a>
					</div>
				</div>
			</section>
		</div>

		/* <Swiper
						slidesPerView={1}
						spaceBetween={10}
						loop={true}
						breakpoints={{
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 15,
							},
							1440: {
								slidesPerView: 4,
							},
						}}>
						{reviews.map((el) => (
							<SwiperSlide>
								{
									<div className='reviews-carousel__card'>
										<img src={el.img} alt='yandex' />
									</div>
								}
							</SwiperSlide>
						))}
					</Swiper> */
	);
}

export default ReviewsCarousel;
