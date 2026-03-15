export default function Platforms({ logo, text }) {
	return (
		<div className="col">
			<img src={logo} style={{ height: "3.5rem" }}></img>
			<p className="text-muted mt-3" style={{ maxWidth: "24rem"}}>
				{text}
			</p>
		</div>
	);
}
