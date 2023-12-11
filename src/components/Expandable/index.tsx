import React, { memo, useState, useRef } from 'react';
import { Button, Content, InfoContent } from './styles';
import { Text } from '../styles';
import colors from '../../utils/colors';

type ExpandableProps = {
    title: string;
    children: React.ReactNode;
};

const Expandable: React.FC<ExpandableProps> = ({ title, children }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <Button onPress={toggleExpand}>
            <Content>
                <Text fontSize="20px" color={colors.black}>{title}</Text>
            </Content>
            {expanded && <InfoContent>
                {children}
            </InfoContent>}
        </Button>
    );
};

export default memo(Expandable);
