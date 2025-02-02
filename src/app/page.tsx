"use client";

import React from 'react';

import { Heading, Text, Flex, Button, RevealFx, Grid, Icon, InlineCode, Logo, Background, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {


	return (

		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>

			<Background
				dots={false} />

			<Flex
				border="neutral-medium"
				gap="24"
				padding="24"
				alignItems="end"
				justifyContent="end"
				fillWidth
				radius="xl"
				onBackground="neutral-strong"
				background="neutral-medium"
			>
				<Button
					href='/login'
					variant="secondary"
					size="m"
					label="Login"
				/>
				<Button
					href='/signup'
					variant="secondary"
					size="m"
					label="Sign Up"
				/></Flex>



			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={68}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">

					<Flex
						mobileDirection="column"
						fillWidth gap="24">

						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">


							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										Michael Social Trading
									</LetterFx>
								</span>
							</Heading>
							<Flex
								fillWidth
								direction="column"
								paddingY="l" gap="m">
							</Flex>


							<RevealFx
								speed="medium"
								delay={0}
								translateY={0}
							>
								<Flex
									direction="column"
									padding="24"
									gap="8"
								>
									<Text variant="heading-strong-m">
										Trade with Confidence and Precision
									</Text>


									<Button
										href='/signup'

										size="m">
										Get Started
									</Button>
								</Flex>
							</RevealFx>



						</Flex>
					</Flex>

				</Flex>
			</Flex>


		</Flex>
	);
}
