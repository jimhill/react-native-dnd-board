import React, { useMemo, memo } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';

import style from '../style';

const Row = memo(({ row, move, renderItem, hidden, onPress }) => {
  const onDragBegin = () => {
    const hoverComponent = renderItem({
      isActive: true,
      move,
      item: row.data,
      index: row.index,
    });
    move(hoverComponent, row);
  };

  const component = renderItem({
    isActive: false,
    move,
    item: row.data,
    index: row.index,
  });

  return (
    <TouchableWithoutFeedback
      onLongPress={onDragBegin}
      delayLongPress={300}
      onPress={onPress}>
      <Animated.View style={hidden ? style.invisible : style.visible}>
        {component}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
});

export default Row;
