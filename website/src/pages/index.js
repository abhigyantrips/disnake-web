import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';
import CodeSnippet from '@site/src/theme/CodeSnippet';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const snippets = [
	{
		label: 'Slash Commands',
		config: `import disnake
from disnake.ext import commands

...

@bot.slash_command()
async def ping(inter):
	await inter.response.send_message("Pong!")`,
	},
	{
		label: 'Message Components',
		config: `import disnake
from disnake.ext import commands

...

@bot.slash_command()
async def button(inter):
	await inter.response.send_message("Buttons!")`,
	},
	{
		label: 'Context Menus',
		config: `import disnake
from disnake.ext import commands

...

@bot.slash_command()
async def ctxmenu(inter):
	await inter.response.send_message("Menus!")`,
	},
];

function Snippet({ label, config }) {
	return <CodeSnippet className={styles.configSnippet} snippet={config} />;
}

const features = [
	{
		title: <>Proper Rate-Limit Handling</>,
		imageUrl: 'public/disnake-logo.png',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie augue a felis tincidunt
				venenatis eu eget erat.
			</>
		),
	},
	{
		title: <>Proper Rate-Limit Handling</>,
		imageUrl: 'public/disnake-logo.png',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie augue a felis tincidunt
				venenatis eu eget erat.
			</>
		),
	},
	{
		title: <>Type-Safety Measures</>,
		imageUrl: 'public/disnake-logo.png',
		description: (
			<>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie augue a felis tincidunt
				venenatis eu eget erat.
			</>
		),
	},
];

function Feature({ imageUrl, title, description }) {
	const imgUrl = useBaseUrl(imageUrl);
	return (
		<div className={clsx('col col--4', styles.feature)}>
			{imgUrl && (
				<div className="text--center">
					<img className={clsx('padding-vert--md', styles.featureImage)} src={imgUrl} alt={title} />
				</div>
			)}
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	return (
		<Layout description="A fork of discord.py - a Discord API wrapper written in Python">
			<header className={clsx('hero', styles.heroBanner)}>
				<div className="container">
					<div className="row">
						<div className={clsx('col col--5 col--offset-1')}>
							<h1 className="hero__title">{siteConfig.title.toUpperCase()}</h1>
							<p className="hero__subtitle">An async Discord API wrapper in Python.</p>
							<div>
								<div className={styles.buttons + ' ' + styles.buttonDiv}>
									<Link
										className={clsx(
											'button button--outline button--secondary button--lg',
											styles.getStarted
										)}
										to="https://guide.disnake.dev/"
									>
										Get Started
									</Link>
								</div>
								<div className={styles.buttons + ' ' + styles.buttonDiv}>
									<Link
										className={clsx(
											'button button--outline button--secondary button--lg',
											styles.getStarted
										)}
										to="https://github.com/DisnakeDev/disnake"
									>
										Visit GitHub
									</Link>
								</div>
							</div>
						</div>
						<div className={clsx('col col--6')}>
							{snippets && snippets.length && (
								<section className={styles.configSnippets}>
									<Tabs
										defaultValue={snippets[0].label}
										values={snippets.map((props, idx) => {
											return { label: props.label, value: props.label };
										})}
									>
										{snippets.map((props, idx) => (
											<TabItem key={idx} value={props.label}>
												<Snippet {...props} />
											</TabItem>
										))}
									</Tabs>
								</section>
							)}
						</div>
					</div>
				</div>
			</header>
			<main>
				{features && features.length && (
					<section className={styles.features}>
						<div className="container margin-vert--md">
							<div className="row">
								{features.map((props, idx) => (
									<Feature key={idx} {...props} />
								))}
							</div>
						</div>
					</section>
				)}
			</main>
		</Layout>
	);
}

export default Home;
