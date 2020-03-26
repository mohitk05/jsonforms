/*
  The MIT License
  
  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { DeleteDialog } from './DeleteDialog';
import { Tooltip } from '@material-ui/core';

export interface DeletePropertyProps {
  title?: String;
  onConfirm(close: () => void): void;
}

export const DeleteProperty = React.memo(({ onConfirm, title }: DeletePropertyProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };
  const confirmDelete = () => {
    onConfirm(closeModal);
  };
  return (
    <>
      <Tooltip title={title || 'Delete'} id='tooltip-delete-property'>
        <IconButton onClick={openModal} aria-label='delete'>
          <CloseIcon />
        </IconButton>
      </Tooltip>
      <DeleteDialog
        open={modalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        onCancel={closeModal}
      />
    </>
  );
});
