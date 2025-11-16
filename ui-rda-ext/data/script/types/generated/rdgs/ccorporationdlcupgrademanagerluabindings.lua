---@meta rdgs.CCorporationDlcUpgradeManager
-- Generated File, do not edit (template Declaration.stg)

---@class rdgs.CCorporationDlcUpgradeManager
local CCorporationDlcUpgradeManager = {}
DlcUpgrade = CCorporationDlcUpgradeManager
---@param self rdgs.CCorporationDlcUpgradeManager
---@param category integer
---@return integer
function CCorporationDlcUpgradeManager.GetUpgradeDifficultyChoice(self, category ) end
---@param self rdgs.CCorporationDlcUpgradeManager
---@param category integer
---@param choice integer
function CCorporationDlcUpgradeManager.SetUpgradeDifficultyChoice(self, category , choice ) end
---@param self rdgs.CCorporationDlcUpgradeManager
---@param category integer
---@return boolean
function CCorporationDlcUpgradeManager.GetUpgradeDifficultyBool(self, category ) end
---@param self rdgs.CCorporationDlcUpgradeManager
---@param category integer
---@param selection boolean
function CCorporationDlcUpgradeManager.SetUpgradeDifficultyBool(self, category , selection ) end
---@param self rdgs.CCorporationDlcUpgradeManager
---@param dlc integer
function CCorporationDlcUpgradeManager.ToggleDLCActivation(self, dlc ) end
---@return boolean returns true if weak pointer holds a valid reference
function CCorporationDlcUpgradeManager.isValid() end

return CCorporationDlcUpgradeManager
