"use client";

import React from 'react';

import { Heading, Input, Text, Flex, Button, RevealFx, Grid, Icon, InlineCode, Logo, Background, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Login() {

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
                    href='/'
                    variant="secondary"
                    size="m"
                    label="Home"
                />
                <Button
                    href='/login'
                    variant="secondary"
                    size="m"
                    label="Login"
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
                                variant="display-strong-s">
                                Sign Up
                            </Heading>


                            <Input
                                id="example"
                                label="Username"
                                value=""
                            />
                            <Input
                                id="example"
                                label="Password"
                                value=""
                            />
                            <Button
                                variant="primary"
                                size="m"
                                label="Submit"
                            />

                        </Flex>
                    </Flex>

                </Flex>
            </Flex>


        </Flex>
    );
}
