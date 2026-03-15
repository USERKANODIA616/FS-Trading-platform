export default function LeftImage({
	imageUrl,
	productName,
	productDescription,
	links,
	googlePlay,
	appStore,
}) {
	return (
		<div className="container">
			<div className="row high-m">
				<div className="col-6">
					<img src={imageUrl} style={{ width: "95%" }}></img>
				</div>
				<div className="col-1"></div>
				<div className="col-5 p-5 d-flex justify-content-center flex-column">
					<h2>{productName}</h2>
					<p className="fs-5 mt-4" style={{ lineHeight: 1.8 }}>
						{productDescription}
					</p>
					<div className="d-flex gap-5 mt-3 mb-4">
						{links &&
							links.map((link, index) => (
								<>
									<a key={index} href={link.url}>
										{link.name}&nbsp;&nbsp;
										<i class="fa-solid fa-arrow-down fa-rotate-270"></i>
									</a>
								</>
							))}
					</div>
					<div className="d-flex gap-4">
						{googlePlay && (
							<a>
								<img
									src="Images\googlePlayBadge.svg"
									style={{ height: "110%" }}
								></img>
							</a>
						)}
						{appStore && (
							<a>
								<img
									src="Images\appstoreBadge.svg"
									style={{ height: "110%" }}
								></img>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
