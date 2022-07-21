import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
	const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

	return (
		<>
			<Head>
				<title>Create T3 App</title>
				<meta name="description" content="Generated by create-t3-app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="bg-green-200 w-screen h-screen ">
				<div className="grid grid-cols-1 h-1/4">
					<h1 className="text-2xl font-bold text-center my-10 h-fit">
						Beety - Easy garden arrangements
					</h1>
					<p className="text-xl text-center">Comming soon...</p>
				</div>
			</main>
		</>
	);
};

export default Home;
