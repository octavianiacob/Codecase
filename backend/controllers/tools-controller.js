const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const Tool = require('../models/tool');
const Setup = require('../models/setup');
const mongoose = require('mongoose');

const getAllTools = async (req, res, next) => {
  let tools;
  try {
    tools = await Tool.find();
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getAllTools', 500)
    );
  }

  //If request is valid, but no tools are found
  if (!tools || tools.length === 0) {
    return next(
      new HttpError(`No tools found`)
    )
  }
  res.json({ tools: tools.map(tool => tool.toObject({ getters: true })) });
}

const getToolByID = async (req, res, next) => {
  const toolID = req.params.tid;
  let tool;
  try {
    tool = await Tool.findById(toolID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getToolByID', 500)
    );
  }
  //If request is valid, but no tool is found
  if (!tool) {
    return next(
      new HttpError(`Tool with ID ${toolID} not found.`, 404)
    );
  }
  //Convert tool from mongoose object to JS object, remove '_' from '_id'
  res.json({ tool: tool.toObject({ getters: true }) });
};

const getToolsBySetupID = async (req, res, next) => {
  const setupID = req.params.sid;
  let setup;
  try {
    setup = await Setup.findById(setupID);
  } catch (err) { //If request is not valid
    return next(
      new HttpError('Error on getSetupByID', 500)
    );
  }
  console.log(setup);
  let tools = []
  for await (toolID of setup.tools) {
    tool = await Tool.findById(toolID);
    tools.push(tool);
  }

  if (!tools) {
    return next(
      new HttpError(`ToolID Error`, 404)
    );
  }
  res.json({ tools: tools.map(tool => tool.toObject({ getters: true })) });
};

exports.getAllTools = getAllTools;
exports.getToolByID = getToolByID;
exports.getToolsBySetupID = getToolsBySetupID;
