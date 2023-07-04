import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<Main />
				<NextScript />
				<script
					src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
					defer
				/>
				<p>
					FreeCodeCamp-Project by{" "}
					<a href="https://github.com/vaupunkt/">vaupunkt</a>
				</p>
			</body>
		</Html>
	);
}
