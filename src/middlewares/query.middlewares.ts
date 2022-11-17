const paramsValidations = (resourceSchema) => async (req, res, next) => {
  const resource = req.query;
  try {
    // throws an error if not valid
    await resourceSchema.validate(resource);
    next();
  } catch (error) {
    // console.error(error);

    res.status(200).json({
      status: 400,
      success: false,
      result: { data: null },
      msg: error.errors.join(', '),
    });

  }
};

export default paramsValidations;