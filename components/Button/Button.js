import React from 'react';
import { Submit, TextSubmit } from './style';

function Button({onPress}) {
    return(
        <Submit onPress={onPress}>
            <TextSubmit>
                &gt;
            </TextSubmit>
        </Submit>
    )
}

export default Button;