import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ReviewService } from './review.service';

const create = catchAsync(async (req: Request, res: Response) => {
  const result = await ReviewService.create(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Review added successfully',
    data: result,
  });
});

// const getAllCategories = catchAsync(async (req: Request, res: Response) => {
//   const result = await CategoryService.getAllCategories();
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Category fetched successfully',
//     data: result,
//   });
// });

// const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await CategoryService.getByIdFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Category fetched successfully',
//     data: result,
//   });
// });

// const deleteCategory = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await CategoryService.deleteCategory(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Category deleted successfully',
//     data: result,
//   });
// });

// const updateCategory = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const updatedData = req.body;
//   const result = await CategoryService.updateCategory(id, updatedData);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'category updated successfully',
//     data: result,
//   });
// });

export const ReviewController = {
  create,
  //   getAllCategories,
  //   getByIdFromDB,
  //   deleteCategory,
  //   updateCategory,
};
