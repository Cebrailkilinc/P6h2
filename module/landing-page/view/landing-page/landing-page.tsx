'use client';

import type { FC } from 'react';
import React, { useState } from 'react';
import { useClassnames } from '@/packages/hook/use-classnames';
import * as cva from './landing-page.cva';
import { LandingPageViewProps } from './landing-page.type';
import Editor from '@/packages/component/editor';

const LandingPageView: FC<LandingPageViewProps> = () => {
  const cx = useClassnames({
    root: cva.rootCva(),
  });

  const [editorData, setEditorData] = useState('<p>Hello from Editor!</p>');

  const editorConfiguration = {
    bold: true,
    italic: true,
    underline: true,
    align: true,
    list: true,
    fontSize: true,
    undoRedo: true,
    image: true,
  };

  return (
    <div className={cx.root}>
      <Editor data={editorData} config={editorConfiguration} onChange={setEditorData} />
    </div>
  );
};

export default LandingPageView;
