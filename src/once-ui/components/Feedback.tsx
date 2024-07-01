import React, { forwardRef, ReactNode } from 'react';

import { IconButton, Button, Icon, Flex, Text } from '.';

interface FeedbackProps {
    variant?: 'info' | 'danger' | 'warning' | 'success';
    icon?: boolean;
    title?: string;
    description?: string;
    showCloseButton?: boolean;
    onClose?: () => void;
    actionButtonProps?: React.ComponentProps<typeof Button>;
    className?: string;
    style?: React.CSSProperties;
    children?: ReactNode;
}

const variantIconMap: {
    [key in 'info' | 'danger' | 'warning' | 'success']: string } = {
    info: 'infoCircle',
    danger: 'errorCircle',
    warning: 'warningTriangle',
    success: 'checkCircle'
};

const Feedback = forwardRef<HTMLDivElement, FeedbackProps>(({
    variant = 'info',
    icon,
    title,
    description,
    showCloseButton = false,
    onClose,
    actionButtonProps,
    className,
    style,
    children,
    ...props
}, ref) => {
    return (
        <Flex
            fillWidth
            radius="l"
            ref={ref}
            borderStyle="solid-1"
            border={`${variant}-medium`}
            background={`${variant}-medium`}
            className={className}
            style={style}
            {...props}>
            {icon &&
                <Flex
                    paddingY="20"
                    paddingLeft="16">
                    <Icon
                        onBackground={`${variant}-medium`}
                        name={variantIconMap[variant]}/>
                </Flex>
            }
            <Flex
                fillWidth
                padding="16"
                gap="24"
                justifyContent="center"
                direction="column">
                <Flex
                    direction="column"
                    fillWidth
                    gap="4">
                    {title && (
                        <Flex
                            fillWidth
                            gap="16">
                            <Flex
                                fillWidth
                                paddingY="4">
                                <Text
                                    variant="heading-strong-m"
                                    onBackground={`${variant}-medium`}>
                                    {title}
                                </Text>
                            </Flex>
                            {showCloseButton && (
                                <IconButton
                                    onClick={onClose}
                                    icon="close"
                                    size="m"
                                    tooltip="Hide"
                                    tooltipPosition="top"
                                    variant="ghost"/>
                            )}
                        </Flex>
                    )}
                    {description &&
                        <Flex
                            fillWidth>
                            <Text
                                variant="body-default-s"
                                onBackground={`${variant}-strong`}>
                                {description}
                            </Text>
                        </Flex>
                    }
                </Flex>
                {children}
                {actionButtonProps && (
                    <Flex
                        paddingBottom="4"
                        gap="8">
                        <Button
                            {...actionButtonProps}/>
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
});

Feedback.displayName = 'Feedback';

export { Feedback };