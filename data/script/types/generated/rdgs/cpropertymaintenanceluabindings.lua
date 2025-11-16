---@meta rdgs.CPropertyMaintenance
-- Generated File, do not edit (template Declaration.stg)

---@class rdgs.CPropertyMaintenance
---@field ConsumerPriority integer		Consumer Priority
---@field DeltaInputSaturation number		Returns the current workforce productivity
---@field HomeAreaName string		
local CPropertyMaintenance = {}
---@param self rdgs.CPropertyMaintenance
---@param productGUID integer
---@return integer
function CPropertyMaintenance.GetMaintenanceCost(self, productGUID ) end
---@param self rdgs.CPropertyMaintenance
---@param productGUID integer
---@return integer
function CPropertyMaintenance.GetAvailableMaintenance(self, productGUID ) end
---@param self rdgs.CPropertyMaintenance
---@param productGUID integer
---@return integer
function CPropertyMaintenance.GetStaticMaintenanceCost(self, productGUID ) end
---@param self rdgs.CPropertyMaintenance
function CPropertyMaintenance.ToggleConsumerPriorityAlarm(self) end
---changes home area to nearest island (tradebuilding nearby or unit on island)
---@param self rdgs.CPropertyMaintenance
function CPropertyMaintenance.SetHomeAreaNet(self) end
---@param self rdgs.CPropertyMaintenance
---@param areaID rdgs.AreaID
function CPropertyMaintenance.SetHomeAreaNet(self, areaID ) end
---@return boolean returns true if weak pointer holds a valid reference
function CPropertyMaintenance.isValid() end

return CPropertyMaintenance
